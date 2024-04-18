"use client";
import BlogContent from "@/components/category/detail-category/BlogContent";
import {
  mainParagraph,
  mainTitle,
  secondaryParagraph,
  secondaryTitle,
} from "@/components/category/detail-category/BlogData";
import CommentForm from "@/components/category/detail-category/CommentForm";
import LatestPosts from "@/components/category/detail-category/LatestPosts";
import SocialMedia from "@/components/common/SocialMedia";
import React from "react";

const DetailCategory = () => {
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
  return (
    <div className="detail mt-8 sm:mx-[7%] ">
      <div>
        <div className="sm:flex">
          <div className="sm:w-3/5 lg:w-3/4">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/ghk-040424-index-testing-vacuums-web-125-661064941cc2e.jpg?crop=1.00xw:0.752xh;0,0.123xh&resize=1120:*"
              alt="detail-main-img"
              className="w-full"
            />
            <div className="py-4 bg-[#F8F3F4]">
              <p className="font-sans text-xs lg:text-base text-center font-bold  text-black">
                Godrej's
              </p>
              <h1
                className={`font-sans lg:text-4xl font-bold text-center  text-black`}
              >
                The Best Vacuum Cleaners
              </h1>
            </div>
            <BlogContent title={mainTitle} paragraph={mainParagraph} />
            <BlogContent
              title={secondaryTitle}
              paragraph={secondaryParagraph}
            />
            <div className="my-4">
              <h1 className="text-2xl text-black font-bold mb-4">
                Submit Your Comment
              </h1>
            </div>
            <CommentForm />
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
  );
};

export default DetailCategory;
