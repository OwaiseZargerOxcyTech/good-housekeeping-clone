"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FoodBlogs = () => {
  const [blogData, setBlogData] = useState([]);

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
            category: "Food",
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

  return (
    <div className="flex flex-wrap sm:mx-[7%]">
      {/* Product Card 1 */}
      {blogData &&
        blogData.map((blog) => (
          <div className="w-1/2 lg:w-1/4 p-4">
            <img
              src={`${blog.image}?t=${new Date().getTime()}`}
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

export default FoodBlogs;
