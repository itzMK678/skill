"use client";
import React from "react";

// Sample blog data
const blogs = [
  {
    id: 1,
    author: "John Doe",
    title: "Understanding React Hooks",
    description:
      "React Hooks are functions that let you hook into React state and lifecycle features from function components.",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Tailwind CSS Tips & Tricks",
    description:
      "Learn how to build fast, responsive, and elegant UIs using Tailwind CSS.",
  },
  {
    id: 3,
    author: "Alice Johnson",
    title: "Next.js Server Actions",
    description:
      "Explore the new Server Actions feature in Next.js to handle forms and mutations directly on the server.",
  },
];

export default function ViewBlog() {
  return (
    <div className="min-h-screen bg-black py-10 px-4 text-purple-100">
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-10">
        Latest Blogs
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-purple-400/30 transition duration-300 border border-purple-800 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-purple-200">
              {blog.title}
            </h2>
            <p className="text-sm text-purple-400 font-medium mb-2">
              By {blog.author}
            </p>
            <p className="text-purple-300 text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
