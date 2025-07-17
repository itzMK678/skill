'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [selectedLeft, setSelectedLeft] = useState('Home');
  const [selectedRight, setSelectedRight] = useState('Skills');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rightBtnRef = useRef(null);
  const leftBtnRef = useRef(null);

  const leftOptions = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  const rightOptions = [
    { name: 'Skills', link: '/' },
    { name: 'SEO', link: '/services/seo' },
    { name: 'Pay-Per-Click (PPC)', link: '/services/ppc' },
    { name: 'Social Media Marketing', link: '/services/social-media-marketing' },
    { name: 'Web Development', link: '/services/web-development' },
    { name: 'Shopify Development', link: '/services/shopify-development' },
    { name: 'Blogging & Content Writing', link: '/services/blogging-content-writing' },
    { name: 'Conversion Rate Optimization (CRO)', link: '/services/cro' },
  ];

  const [rightDropdownTop, setRightDropdownTop] = useState(0);
  const [leftDropdownTop, setLeftDropdownTop] = useState(0);

  useEffect(() => {
    if (rightBtnRef.current) {
      setRightDropdownTop(rightBtnRef.current.offsetTop + rightBtnRef.current.offsetHeight);
    }
    if (leftBtnRef.current) {
      setLeftDropdownTop(leftBtnRef.current.offsetTop + leftBtnRef.current.offsetHeight);
    }
  }, [isOpenRight, isOpenLeft]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center items-center py-5 bg-black">
        <div className="relative flex items-center">

          {/* Left Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpenLeft(true)}
            onMouseLeave={() => setIsOpenLeft(false)}
          >
            <div
              ref={leftBtnRef}
              className=" w-[320px] lg:w-[400px] h-[50px] text-white rounded-l-[20px] flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer hover:from-blue-600 hover:to-pink-600 transition duration-300"
            >
              {selectedLeft} <FaChevronDown className="ml-2 text-sm" />
            </div>

            {isOpenLeft && (
              <ul
                className="absolute w-[300px] bg-black text-white rounded-b-[10px] shadow-md z-20"
                style={{ top: leftDropdownTop }}
              >
                {leftOptions.map((item) => (
                  <li
                    key={item.name}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelectedLeft(item.name);
                      setIsOpenLeft(false);
                      router.push(item.link);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Center Logo + Brand */}
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 z-30">
            <div className="h-13 flex items-center gap-2 px-4 py-2 rounded-[22px] bg-black shadow-md">
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
                <Image src={logo} alt="Logo" width={24} height={24} />
              </div>
              <span className="text-white text-lg font-semibold">Skill Creatives</span>
            </div>
          </div>

          {/* Right Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpenRight(true)}
            onMouseLeave={() => setIsOpenRight(false)}
          >
            <div
              ref={rightBtnRef}
              className="w-[320px] lg:w-[400px] h-[50px] text-white rounded-r-[20px] flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer hover:from-blue-600 hover:to-pink-600 transition duration-300 gap-2"
            >
              <span className="text-center">{selectedRight}</span>
              <FaChevronDown className="text-sm" />
            </div>

            {isOpenRight && (
              <ul
                className="absolute w-[300px] bg-black text-white rounded-b-[10px] shadow-md z-20"
                style={{ top: rightDropdownTop }}
              >
                {rightOptions.map((item) => (
                  <li
                    key={item.name}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-center"
                    onClick={() => {
                      setSelectedRight(item.name);
                      setIsOpenRight(false);
                      router.push(item.link);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar (<640px) */}
      <div className="sm:hidden w-full flex justify-between items-center px-4 py-3 bg-black">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
            <Image src={logo} alt="Logo" width={24} height={24} />
          </div>
          <span className="text-white text-lg font-semibold">Skill Creatives</span>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Options */}
      {mobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center w-full px-4 gap-2 py-3 bg-black">
          {[...leftOptions, ...rightOptions].map((item, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(item.link);
                setMobileMenuOpen(false);
              }}
              className="text-white bg-gray-800 px-4 py-3 rounded hover:bg-gray-700 cursor-pointer w-full text-center"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
