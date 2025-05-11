'use client';
import React, { useState } from 'react';
import logo from '../public/logo.png';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { 
            name: 'Services', 
            dropdown: true,
            subMenu: [
                { name: 'SEO', link: '/services/seo' },
                { name: 'Pay-Per-Click (PPC)', link: '/services/ppc' },
                { name: 'Social Media Marketing', link: '/services/social-media-marketing' },
                { name: 'Web Development', link: '/services/web-development' },
                { name: 'Shopify Development', link: '/services/shopify-development' }, // Added Shopify
                { name: 'Blogging & Content Writing', link: '/services/blogging-content-writing' }, // Added Blogging & Content Writing
                { name: 'Conversion Rate Optimization (CRO)', link: '/services/cro' }, // Added CRO
            ]
        },
        { name: 'Contact', link: '/contact' }
    ];

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-lg font-semibold">Skill Creatives</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex z-50 space-x-6">
                    {menuItems.map((item, index) => (
                        item.dropdown ? (
                            <div key={index} className="relative group">
                                <button 
                                    onClick={toggleServices} 
                                    className="text-white hover:text-first flex items-center gap-1"
                                >
                                    {item.name} <FaChevronDown className="text-sm" />
                                </button>
                                <div 
                                    className={`absolute left-0 mt-1 top-4 bg-black w-52 rounded shadow-md ${isServicesOpen ? 'block' : 'hidden'} group-hover:block`}
                                >
                                    {item.subMenu.map((sub, i) => (
                                        <a key={i} href={sub.link} className="block px-4 py-2 text-gray-300 hover:bg-gray-600">
                                            {sub.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={index} href={item.link} className="text-gray-300 hover:text-white">
                                {item.name}
                            </a>
                        )
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <a href="#" className="bg-first text-white px-4 py-2 rounded hover:bg-first-dark">Get Started</a>
                </div>

                {/* Mobile Hamburger */}
                <button onClick={toggleMenu} className="md:hidden z-50 text-gray-300 hover:text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleMenu}
                    ></div>

                    {/* Drawer */}
                    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
                        <div className="p-4 space-y-2">
                            {menuItems.map((item, index) => (
                                item.dropdown ? (
                                    <div key={index}>
                                        <button 
                                            onClick={toggleServices} 
                                            className="w-full text-left text-gray-300 hover:text-white flex justify-between px-2 py-2"
                                        >
                                            {item.name} <FaChevronDown className="text-sm" />
                                        </button>
                                        {isServicesOpen && (
                                            <div className="pl-4">
                                                {item.subMenu.map((sub, i) => (
                                                    <a key={i} href={sub.link} className="block text-gray-300 hover:text-white px-2 py-1">
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a key={index} href={item.link} className="block text-gray-300 hover:text-white px-2 py-2">
                                        {item.name}
                                    </a>
                                )
                            ))}

                            {/* Mobile Get Started Button */}
                            <div className="mt-4">
                                <a href="#" className="block bg-first text-white px-4 py-2 rounded hover:bg-first-dark text-center">Get Started</a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
