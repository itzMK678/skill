"use client";
import React, { useState, useEffect, useRef } from "react";
import { ref, onValue, set, remove } from "firebase/database";
import DOMPurify from "dompurify";
import JoditEditor from "jodit-react";
import { db } from "../../../lib/firebase";

export default function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const editor = useRef(null);

  useEffect(() => {
    const fetchBlogs = () => {
      try {
        const blogsRef = ref(db, "blogs");
        const unsubscribe = onValue(
          blogsRef,
          (snapshot) => {
            const blogData = snapshot.val();
            if (blogData) {
              const blogList = Object.keys(blogData).map((key) => ({
                id: key,
                ...blogData[key],
              }));
              setBlogs(blogList);
            } else {
              setBlogs([]);
            }
          },
          (error) => {
            console.error("Error fetching blogs: ", error);
          }
        );
        return () => unsubscribe();
      } catch (error) {
        console.error("Error setting up blog fetch: ", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleEditOpen = (blog) => {
    setEditBlog(blog);
    setEditTitle(blog.title || "");
    setEditDescription(blog.description || "");
    setEditModalOpen(true);
  };

  const handleEditSave = async () => {
    if (!editTitle || !editDescription) {
      alert("Please fill in both title and description");
      return;
    }

    try {
      const blogRef = ref(db, `blogs/${editBlog.id}`);
      await set(blogRef, {
        id: editBlog.id,
        title: editTitle,
        description: editDescription,
        slug: editBlog.slug, // Preserve original slug
        createdAt: editBlog.createdAt, // Preserve original creation date
      });
      setEditModalOpen(false);
      alert("Blog post updated successfully!");
    } catch (error) {
      console.error("Error updating blog: ", error);
      alert("Failed to update blog post");
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const blogRef = ref(db, `blogs/${blogId}`);
        await remove(blogRef);
        alert("Blog post deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog: ", error);
        alert("Failed to delete blog post");
      }
    }
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setEditBlog(null);
    setEditTitle("");
    setEditDescription("");
  };

  // Jodit editor configuration
  const config = {
    readonly: false,
    placeholder: "Enter description",
    height: 300,
    style: {
      backgroundColor: "#1F2937",
      color: "#D8B4FE",
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
    <div className="min-h-screen bg-black py-10 px-4 text-purple-100">
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-10">
        Latest Blogs
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {blogs.length === 0 ? (
          <p className="text-center text-purple-300">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-purple-400/30 transition duration-300 border border-purple-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-purple-200">
                    {blog.title || "Untitled"}
                  </h2>
                  <div
                    className="text-purple-300 text-sm mt-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.description.slice(0,120)+"..." || "No description available."),
                    }}
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditOpen(blog)}
                    className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      
      {editModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-[800px]">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
              Edit Blog
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Enter title"
                  className="w-full px-4 py-2 border border-purple-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-1">
                  Description
                </label>
                <JoditEditor
                  ref={editor}
                  value={editDescription}
                  config={config}
                  onBlur={(newContent) => setEditDescription(newContent)}
                  onChange={() => {}}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleEditSave}
                  className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
                >
                  Save
                </button>
                <button
                  onClick={handleModalClose}
                  className="w-full py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}