"use client";
import LatestPosts from "@/components/category/detail-category/LatestPosts";
import SocialMedia from "@/components/common/SocialMedia";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";

const GetBlogBySlug = ({ params }) => {
  const [isAdmin, setIsAdmin] = useState("N");
  const [userId, setUserId] = useState();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { slug } = params;
  const latestPosts = [
    { id: 1, title: "Introduction to Next.js" },
    { id: 2, title: "Building Responsive UI with Tailwind CSS" },
    { id: 3, title: "State Management in React with Redux" },
    { id: 4, title: "Deploying Next.js Apps to Vercel" },
    { id: 5, title: "Creating Custom Hooks in React" },
    { id: 6, title: "Optimizing Performance with React.memo" },
    { id: 7, title: "Using Context API for Global State Management" },
    { id: 8, title: "Working with GraphQL in Next.js" },
    { id: 9, title: "Testing React Components with Jest and Testing Library" },
    { id: 10, title: "Adding Authentication to Next.js Apps" },
  ];

  const [blogData, setBlogData] = useState({});

  const [imageData, setImageData] = useState(null);

  const { data: session, status } = useSession();

  const handleGetBlog = async (e) => {
    try {
      const response = await fetch("/api/getblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });

      const { error, result } = await response.json();

      setBlogData(result);

      if (error !== undefined) {
        console.log("Blog Get error:", error);
      }
    } catch (error) {
      console.error("Blog Get operation error", error);
    } finally {
      setLoadingComplete(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (slug) {
          await handleGetBlog();
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchData();
  }, [slug]); // Add slug as dependency to rerun effect when slug changes

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    setUserId(session?.user?.id);
    if (session?.user?.name === "admin") {
      setIsAdmin("Y");
    }
  }, [session, status]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(blogData.image);
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const blob = await response.blob();
        setImageData(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    if (blogData.image) {
      fetchImage();
    }
  }, [blogData.image]);

  if (status === "loading" || !loadingComplete) {
    return <div></div>;
  }

  const canAccessContent =
    isAdmin === "Y" ||
    blogData.published === "Y" ||
    blogData.author_id == userId;

  if (!canAccessContent) {
    return <div>Access Denied</div>;
  }

  return (
    <>
      {canAccessContent && blogData && (
        <div>
          {/* <Navbar /> */}
          <div className="detail mt-8 sm:mx-[7%] ">
            <div>
              <div className="sm:flex">
                <div className="sm:w-3/5 lg:w-3/4">
                  {blogData.image && imageData && (
                    <img
                      // src={`${blogData.image}?t=${new Date().getTime()}`}
                      src={imageData}
                      alt="img"
                      className="w-full"
                    />
                  )}
                  <div className="py-4 bg-[#F8F3F4]">
                    <p className="font-sans text-xs lg:text-base text-center font-bold  text-black">
                      {blogData.category}
                    </p>
                    <h1
                      className={`font-sans lg:text-4xl font-bold text-center  text-black`}
                    >
                      {blogData.title}
                    </h1>
                  </div>

                  <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-2xl text-black font-sans font-bold mb-4">
                      {blogData.description}
                    </h2>
                    <p
                      className="text-base text-gray-700 font-serif"
                      dangerouslySetInnerHTML={{ __html: blogData.content }}
                    ></p>
                  </div>
                </div>
                {/* right side */}
                <div className="sm:m-4 w-full sm:mt-0 sm:w-2/5 lg:w-1/4">
                  <div className="social media p-4 bg-blue-400 shadow-md border rounded-md mb-2 flex flex-col items-center">
                    <h1 className="text-xl font-bold text-white">
                      Over 2,000,000+ Readers
                    </h1>
                    <p className="text-sm text-white">
                      Get Fresh Updates on Social Media
                    </p>
                    <div className="flex gap-2 mt-4">
                      <SocialMedia />
                    </div>
                  </div>
                  <div className="ad">
                    <img
                      src="https://tpc.googlesyndication.com/simgad/2446551959029324805"
                      alt="side-detail"
                      className="w-full"
                    />
                  </div>
                  <div className="max-w-lg w-full">
                    <LatestPosts posts={latestPosts} />
                  </div>
                  <div className="ad mt-4">
                    <img
                      src="https://tpc.googlesyndication.com/simgad/2311008341451174436"
                      alt="side-detail"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default GetBlogBySlug;
