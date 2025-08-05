
import React from 'react';

const handleScroll = () => {
  window.scrollBy({ top: 500, behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <div className=" h-fit md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
      <div className=" inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm opacity-40 " />
      <div className=" group cursor-pointer  text-center max-w-4xl px-6 md:px-12">
        <p className=" uppercase tracking-widest transition-transform duration-500 text-purple-400 text-lg font-semibold mb-4 ">
          Elevate Your Brand with Cutting-Edge Digital Strategies
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white group-hover:scale-105 transition-transform duration-500 "style={{ textShadow: '2px 2px #6b21a8' }}v>
          Digital Marketing Solutions that Drive Results
        </h1>
        <p className="group-hover:scale-x-90 text-lg transition-transform duration-500 md:text-xl text-gray-300 mt-6">
          We help businesses grow online with tailored strategies in SEO, PPC, Social Media Marketing, and more.
        </p>
        <button
          onClick={handleScroll}
          className="cursor-pointer mt-8 bg-white text-black font-bold rounded-full py-4 px-10 shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Discover more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;


