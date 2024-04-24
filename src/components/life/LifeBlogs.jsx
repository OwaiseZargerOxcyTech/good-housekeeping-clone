"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LifeBlogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/combinedapi`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apiName: "getpublishedblogs",
            category: "Life",
          }),
        });

        const { result } = await response.json();
        setBlogData(result);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImages() {
      const imageMap = {};
      for (const blog of blogData) {
        if (blog.image) {
          try {
            const response = await fetch(blog.image);
            if (response.ok) {
              const blob = await response.blob();
              const imageUrl = URL.createObjectURL(blob);
              imageMap[blog.id] = imageUrl;
            } else {
              console.error(
                `Failed to fetch image for blog with ID ${blog.id}`
              );
            }
          } catch (error) {
            console.error(
              `Error fetching image for blog with ID ${blog.id}:`,
              error
            );
          }
        }
      }
      setImageData(imageMap);
    }

    fetchImages();
  }, [blogData]);

  return (
    <div className="flex flex-wrap sm:mx-[7%]">
      {/* Product Card 1 */}
      {blogData &&
        blogData.map((blog) => (
          <div className="w-1/2 lg:w-1/4 p-4">
            <img
              // src={`${blog.image}?t=${new Date().getTime()}`}
              src={imageData[blog.id]}
              alt="img"
              className="w-full"
            />
            <Link href={`blog/${blog.slug}`}>
              <p className="mt-2 text-center lg:text-xl text-black font-bold">
                {blog.title}
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default LifeBlogs;
