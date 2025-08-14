"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Twitter,
  Github,
} from "lucide-react";

import Image from "next/image";
import logo from "../../public/logo.png";
import ContactPage from "../dashboard/contact/page";
import MainBlog from "../dashboard/blogs/MainBlog";
import User from "./user/userMain";


const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menu = [
    { name: "Blogs", tab: 1, icon: "📝" },
    { name: "Contact", tab: 2, icon: "📞" },
    { name: "User", tab: 3, icon: "👤" },
  ];

  let content;
  if (active === 1) content = <MainBlog />;
  if (active === 2) content = <ContactPage />;
  if (active === 3) content = <User />;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-black text-purple-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-purple-400 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={toggleSidebar} className="md:hidden">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-800 w-64 p-6 fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static transition-transform duration-300 ease-in-out z-20 shadow-lg`}
        >
          {/* Logo */}
          <div className="flex flex-col items-center space-x-3 mb-8">
            <Image
              src={logo}
              alt="Logo"
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            {menu?.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActive(item.tab)}
                className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-all ${
                  active === item.tab
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-800 text-purple-300"
                }`}
              >
                <span className="mr-2">{item.icon}</span> {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 mt-2 ml-2 items-center">{content}</main>
      </div>
    </div>
  );
};

export default Dashboard;