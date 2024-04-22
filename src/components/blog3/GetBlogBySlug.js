"use client";
import React from "react";
// import { blogData } from "@/components/blog1/blogData"
// import BlogLists from "@/components/blog1/BlogLists"
import Blog from "@/components/blog3/Blog";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const GetBlogBySlug = ({ params }) => {
  const [isAdmin, setIsAdmin] = useState("N");
  const [userId, setUserId] = useState();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { slug } = params;

  const [blogData, setBlogData] = useState({});

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

  if (status === "loading" || !loadingComplete) {
    return <div>Loading...</div>;
  }

  const canAccessContent =
    isAdmin === "Y" ||
    blogData.published === "Y" ||
    blogData.author_id == userId;

  if (!canAccessContent) {
    return <div>Access Denied</div>;
  }

  return (
    <div
      style={{
        overflowY: "scroll",
        scrollbarColor: "white white",
        scrollbarWidth: "thin",
        height: "100vh",
      }}
    >
      <main>
        <div className="mx-auto max-w-2xl px-6 py-10 sm:px-8 sm:py-16 lg:max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 sm:gap-x-10">
            <div className="col-span-8">
              {canAccessContent && blogData && <Blog blog={blogData} />}
            </div>

            <div className=" col-span-4 space-y-10"></div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GetBlogBySlug;
