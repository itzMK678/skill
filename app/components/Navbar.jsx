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
        { name: 'Home', link: '#' },
        { name: 'About', link: '#' },
        { 
            name: 'Services', 
            dropdown: true,
            subMenu: [
                { name: 'SEO', link: '#' },
                { name: 'Content Marketing', link: '#' },
                { name: 'Social Media Management', link: '#' },
                { name: 'PPC Advertising', link: '#' }
            ]
        },
        { name: 'Contact', link: '#' }
    ];

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-lg font-semibold">Skill Creatives</span>
                </div>
                
                <div className="hidden md:flex space-x-6">
                    {menuItems.map((item, index) => (
                        item.dropdown ? (
                            <div key={index} className="relative group">
                                <button 
                                    onClick={toggleServices} 
                                    className="text-white hover:text-primary flex items-center gap-1"
                                >
                                    {item.name} <FaChevronDown className="text-sm" />
                                </button>
                                <div 
                                    className={`absolute left-0 mt-1 top-4  bg-black w-52 rounded shadow-md ${isServicesOpen ? 'block' : 'hidden'} group-hover:block`}
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
                <button>
                    <a href="#" className="hidden md:block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Get Started</a>

                </button>
                
                <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-700 p-2">
                    {menuItems.map((item, index) => (
                        item.dropdown ? (
                            <div key={index}>
                                <button 
                                    onClick={toggleServices} 
                                    className="w-full text-left text-gray-300 hover:text-white flex justify-between px-2 py-1"
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
                            <a key={index} href={item.link} className="block text-gray-300 hover:text-white px-2 py-1">
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;