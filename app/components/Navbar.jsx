"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../public/logo.png";

const handleScroll = () => {
  window.scrollBy({ top: 100, behavior: "smooth" });
};
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (link) => {
    setIsOpen(false);
    if (link) router.push(link);
  };

  return (
    <nav className="w-full bg-black bg-opacity-80 text-white px-6 py-4 backdrop-blur-md shadow-sm border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full bg-white"
          />
          <span className="text-lg font-semibold">Skill Creatives</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => handleRedirect("/")} className="hover:text-purple-400 transition">Home</button>
          <button onClick={() => handleRedirect("/about")} className="hover:text-purple-400 transition">About</button>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-purple-400 transition">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <ul className="py-2 text-sm">
                {[
                  { label: "SEO", href: "/services/seo" },
                  { label: "Pay Per Click", href: "/services/ppc" },
                  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Shopify Development", href: "/services/shopify-development" },
                  { label: "Blogging & Content", href: "/services/blogging-content-writing" },
                  { label: "CRO", href: "/services/cro" },
                ].map(({ label, href }) => (
                  <li
                    key={href}
                    onClick={() => handleRedirect(href)}
                    className="hover:bg-purple-400 px-4 py-2 cursor-pointer"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button onClick={() => handleRedirect("/contact")} className="hover:text-purple-400 transition">Contact</button>
        </div>

        {/* Get Started */}
        <div className="hidden md:block">
          <button
            onClick={handleScroll}
            className="bg-[#1e1e1e] hover:bg-purple-600 transition px-5 py-2 rounded-md text-white font-medium"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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
            className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm text-center focus:outline-none"
          >
            <option disabled value="">Skills</option>
            <option value="/services/seo">SEO</option>
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
