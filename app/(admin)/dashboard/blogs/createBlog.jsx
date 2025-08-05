"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    console.log("Title:", title);
    console.log("Description:", description);
    // Add actual upload logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-purple-100">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-[800px]">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
          Upload Blog
        </h2>

        <div className="space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full px-4 py-2 border border-purple-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows={4}
              className="w-full px-4 py-2 border border-purple-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100"
            ></textarea>
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
