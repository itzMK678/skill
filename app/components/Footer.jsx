import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../public/logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
          
          
          <div className="flex flex-col items-center md:items-start">
           <Image src={logo} width={100} height={100}/>
            <p className="text-gray-400 text-center md:text-left leading-relaxed">
              We provide innovative digital solutions to help your business grow and succeed in the online world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {[
                { icon: <FaFacebookF size={22} />, link: 'https://www.facebook.com' },
                { icon: <FaTwitter size={22} />, link: 'https://www.twitter.com' },
                { icon: <FaLinkedinIn size={22} />, link: 'https://www.linkedin.com' },
                { icon: <FaInstagram size={22} />, link: 'https://www.instagram.com' },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Skill Creatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
