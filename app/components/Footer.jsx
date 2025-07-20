import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../public/logo.png'; // Adjust path if needed

const App = () => {
  return (
    <>
    <footer className="bg-black text-gray-300 ">
      <div className="bg-black pb-30 pt-20 ">
        <div className="group relative flex flex-col items-center justify-center text-center">
          {/* Main Logo + Text */}
          <div className="bg-black text-white  rounded-lg w-full md:w-[500px]">
            <Image src={logo} alt="Logo" width={80} height={80} className="mx-auto mb-4" />
            <p className="text-sm w-auto md:text-base">
              We provide innovative digital solutions to help your business grow and succeed in the online world.
            </p>
          </div>

          {/* Hover Section - Social Media */}
          <div className="absolute top-full  w-0 group-hover:w-full max-w-[500px] overflow-hidden transition-all duration-1400 ease-in-out00 flex justify-center">
            <div className="bg-black rounded-lg px-6 py-4 flex flex-col items-center  w-fit">
              <p className="text-white text-sm m-t">Connect with us on Social Media</p>
              <div className="rounded-[22px] px-3 flex gap-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

                {[
                  { icon: <FaFacebookF />, label: "Facebook", link: "https://facebook.com" },
                  { icon: <FaTwitter />, label: "Twitter", link: "https://twitter.com" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://linkedin.com" },
                  { icon: <FaInstagram />, label: "Instagram", link: "https://instagram.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                 className="p4 my-1 gap:5 flex flex-col group-icon items-center  text-white bg-transparent rounded-md border border-transparent transition-all duration-300 hover:bg-white   hover:text-red-400 ">
 
 
                    <div className="p-3 py-2 text-2xl group-icon-hover:text-red-600 ">{social.icon}</div>
                    
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center text-sm text-gray-500 border-t border-gray-500">
         <a href="https://mamoon-dev.vercel.app/"> <p>&copy; 2025 Skill Creatives. All rights reserved.</p></a>
        </div>

 
    </footer>
       </>
  );
};

export default App;
