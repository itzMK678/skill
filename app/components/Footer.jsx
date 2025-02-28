import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container px-6 mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">YourCompany</h2>
            <p className="text-gray-400">
              We provide innovative digital solutions to help your business grow and succeed in the online world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#home" className="hover:text-purple-500">Home</a></li>
              <li><a href="#about" className="hover:text-purple-500">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-500">Services</a></li>
              <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
