import React from "react";

const BlogContent = ({ title, paragraph }) => {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-base text-gray-700">{paragraph}</p>
    </div>
  );
};

export default BlogContent;
