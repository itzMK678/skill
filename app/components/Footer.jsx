import React from 'react';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../public/logo.png';

const Footer = () => {
  return (
    <footer className="group bg-black text-white cursor-pointer w-full">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 md:px-10 lg:px-16 py-16 gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col items-center lg:items-start relative group w-full lg:w-[400px]">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          {/* Hover Social Reveal */}
           <div className="absolute top-full w-0 group-hover:w-full max-w-[500px] overflow-hidden transition-all duration-700 ease-in-out flex justify-center">
            <div className="bg-black rounded-lg px-6 py-4 flex flex-col items-center w-fit text-center">
              <p className="text-white text-sm mb-3">
                Connect with us on Social Media
              </p>
              <div className="rounded-[22px] px-3 py-2 flex gap-4 bg-purple-800">
                {[
                  {
                    icon: <FaFacebookF />,
                    label: 'Facebook',
                    link: 'https://www.facebook.com/share/16AcjD3auM/',
                  },
                  {
                    icon: <FaTwitter />,
                    label: 'Twitter',
                    link: 'https://twitter.com',
                  },
                  {
                    icon: <FaLinkedinIn />,
                    label: 'LinkedIn',
                    link: 'https://www.linkedin.com/company/skill-creatives/',
                  },
                  {
                    icon: <FaInstagram />,
                    label: 'Instagram',
                    link: 'https://www.instagram.com/skillcreatives?igsh=dTljcnhsZmhrMW52',
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex flex-col items-center text-white hover:bg-white hover:text-purple-800 rounded transition"
                  >
                    <div className="text-2xl">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm w-full">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-2xl mb-2">Services</h3>
            <ul className="text-white/50 space-y-1">
              {[
                ['SEO', '/services/seo'],
                ['Pay Per Click', '/services/ppc'],
                ['Social Media Marketing', '/services/social-media-marketing'],
                ['Web Development', '/services/web-development'],
                ['Shopify Development', '/services/shopify-development'],
                ['Blogging & Content Writing', '/services/blogging-content-writing'],
                ['Conversion Rate Optimization', '/services/cro'],
              ].map(([label, url], i) => (
                <li key={i}>
                  <a href={url} className="hover:text-white block">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold text-2xl mb-2">Skills</h3>
            <ul className="text-white/50 space-y-1">
              {['Design Thinking', 'UX/UI', 'Marketing Strategy'].map((skill, i) => (
                <li key={i} className="hover:text-white">{skill}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-2xl mb-2">Contact</h3>
            <ul className="text-white/50 space-y-1">
              <li>
                <a href="tel:+923088145270" className="hover:text-white">+92 308 8145270</a>
              </li>
            </ul>
          </div>

          {/* Email & Location */}
          <div>
            <h3 className="font-semibold text-2xl mb-2">Email & Location</h3>
            <ul className="text-white/50 space-y-1">
              <li>
                <a href="mailto:info@skillcreatives.com" className="hover:text-white">info@skillcreatives.com</a>
              </li>
              <li className="hover:text-white">Punjab, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
  <a href="https://mamoon-dev.vercel.app/">      <div className="py-4 overflow-hidden relative  text-center text-xs text-gray-400 border-t border-gray-700">
     <div className='absolute z-10 top-3 right-15 group-hover:top-8 transition-all duration-500 ease-in-out xs:right-35 xm:right-45 md:right-70 lg:right-100 xl:right-140'>
          &copy; 2025 Skill Creatives. All rights reserved.
       </div>
       <div className='absolute z-10 top-8 right-150 group-hover:top-3 transition-all duration-500 ease-in-out  xs:right-35 xm:right-45 md:right-70 lg:right-100 xl:right-140 '>
         Developed by MamoonKhaliq
       </div>
      </div></a>
    </footer>
  );
};

export default Footer;
