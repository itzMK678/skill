"use client";
import { useState, useRef } from "react";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import JoditEditor from "jodit-react";
import { db } from "../../../lib/firebase";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef(null); // Reference for Jodit editor

  const handleUpload = async () => {
    console.log("Database reference:", db); // Debug Firebase db
    if (!title || !description) {
      alert("Please fill in both title and description");
      return;
    }

    try {
      const blogId = uuidv4();
      const slug = slugify(title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });

      const blogRef = ref(db, `blogs/${blogId}`);

      await set(blogRef, {
        id: blogId,
        title: title,
        description: description,
        slug: slug,
        createdAt: new Date().toISOString(),
      });

      setTitle("");
      setDescription("");
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to create blog post");
    }
  };

  // Jodit editor configuration
  const config = {
    readonly: false,
    placeholder: "Enter description",
    height: 400,
    style: {
      backgroundColor: "#1F2937", // Match your dark theme
      color: "#D8B4FE", // Purple text
    },
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "image",
      "video",
      "table",
      "link",
      "|",
      "undo",
      "redo",
    ],
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

          {/* Jodit Editor for Description */}
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-1">
              Description
            </label>
            <JoditEditor
              ref={editor}
              value={description}
              config={config}
              onBlur={(newContent) => setDescription(newContent)} // Update on blur
              onChange={(newContent) => {}} // Optional: Handle live changes if needed
            />
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