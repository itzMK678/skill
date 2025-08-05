"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X , ChevronDown } from "lucide-react"; // Hamburger icons
import logo from "../public/logo.png";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (link) => {
    setIsOpen(false);
    if (link) router.push(link);
  };

  return (
    <nav className="font-semibold mt-2 w-full bg-purple-600 backdrop-blur-md text-white px-4 py-3 shadow-md ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span className="text-lg font-semibold whitespace-nowrap">
            SkillCreatives
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 flex-wrap">
          <button onClick={() => handleRedirect("/")} className="hover:bg-white hover:text-purple-500 p-2 rounded-md cursor-pointer whitespace-nowrap">Home</button>
          <button onClick={() => handleRedirect("/about")} className="hover:bg-white hover:text-purple-500 p-2 rounded-md cursor-pointer whitespace-nowrap">About</button>
          <button onClick={() => handleRedirect("/contact")} className="hover:bg-white hover:text-purple-500 p-2 rounded-md cursor-pointer whitespace-nowrap">Contact</button>
      
       <div className="relative">
  <select
    defaultValue=""
    onChange={(e) => handleRedirect(e.target.value)}
    className="bg-purple-600 cursor-pointer text-white px-3 py-1 pr-8 rounded-md text-sm whitespace-nowrap appearance-none active:ring active:ring-purple-400 "
  >
    <option disabled value="">Skills</option>
    <option className="rounded-md mt-4" value="/services/seo">SEO</option>
    <option className="rounded-md" value="/services/ppc">Pay Per Click</option>
    <option className="rounded-md" value="/services/social-media-marketing">Social Media Marketing</option>
    <option className="rounded-md" value="/services/web-development">Web Development</option>
    <option className="rounded-md" value="/services/shopify-development">Shopify Development</option>
    <option className="rounded-md" value="/services/blogging-content-writing">Blogging & Content</option>
    <option className="rounded-md" value="/services/cro">CRO</option>
  </select>

  {/* Lucide ChevronDown Icon */}
  <div className="pointer-events-none absolute right-33 font-bold top-1/2 transform -translate-y-1/2">
    <ChevronDown className="w-4 h-4 text-white" />
  </div>
</div>
          
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-3 px-4">
          <button onClick={() => handleRedirect("/")}>Home</button>
          <button onClick={() => handleRedirect("/about")}>About</button>
          <button onClick={() => handleRedirect("/contact")}>Contact</button>
          <select
            defaultValue=""
            onChange={(e) => handleRedirect(e.target.value)}
            className=" bg-purple-600 text-white px-3 py-1 rounded-md text-sm text-center"
          >
            <option disabled value="">Skills</option>
            <option value="/services/seo" className="w-[100px]">SEO</option>
            <option value="/services/ppc">Pay Per Click</option>
            <option value="/services/social-media-marketing">Social Media Marketing</option>
            <option value="/services/web-development">Web Development</option>
            <option value="/services/shopify-development">Shopify Development</option>
            <option value="/services/blogging-content-writing">Blogging & Content</option>
            <option value="/services/cro">CRO</option>
          </select>
        </div>
      )}
    </nav>
  );
}
