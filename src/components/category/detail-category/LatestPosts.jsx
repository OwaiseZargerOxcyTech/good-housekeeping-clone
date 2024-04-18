import { raleway } from "@/components/common/fonts";
import React from "react";

const LatestPosts = ({ posts }) => {
  return (
    <div className=" bg-blue-200 p-6 rounded-lg shadow-md mt-2 border">
      <h2 className="text-2xl font-bold mb-4 text-black">Latest Posts</h2>
      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.id} className="py-2">
            <a
              href={`/posts/${post.id}`}
              className={`${raleway.className} text-black hover:underline`}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
