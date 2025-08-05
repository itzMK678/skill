"use client";
import React, { useState } from "react";
import CreateBlog from "./createBlog";
import ViewBlog from "./viewBlog";

const MainBlog = () => {
  const [active, setActive] = useState(1);

  const menu = [
    { name: "View", tab: 1 },
    { name: "Create", tab: 2 },
  ];

  let content;
  if (active === 1) content = <ViewBlog />;
  if (active === 2) content = <CreateBlog />;

  return (
    <div className="min-h-screen bg-black text-purple-100">
      {/* Top Navigation */}
      <div className="flex gap-6 h-[50px] bg-black-900 justify-center items-center font-semibold  shadow">
        {menu.map((item) => (
          <div
            key={item.tab}
            onClick={() => setActive(item.tab)}
            className={`px-4 py-1 text-2xl rounded-md cursor-pointer transition-all duration-200 ${
              active === item.tab
                ? "bg-purple-600 text-white"
                : "hover:bg-gray-800 text-purple-300"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      
      <div className="p-6">{content}</div>
    </div>
  );
};

export default MainBlog;
