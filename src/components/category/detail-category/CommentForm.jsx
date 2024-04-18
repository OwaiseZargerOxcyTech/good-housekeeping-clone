import React, { useState } from "react";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to submit the comment
    console.log({ name, email, comment });
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 w-full xl:w-2/3 bg-white  border rounded-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 bg-slate-50 p-2 border w-full lg:w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2  bg-slate-50 border w-full lg:w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm  font-medium text-gray-700"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 p-2  bg-slate-50 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows="6"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-1/4 bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
