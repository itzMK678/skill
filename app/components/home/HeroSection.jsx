import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-fit md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
     
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
        <p className="uppercase tracking-widest text-gray-300 text-lg font-semibold mb-4 animate-fade-in">
          Elevate Your Brand with Cutting-Edge Digital Strategies
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white transform transition duration-500 ease-in-out hover:scale-105 animate-slide-in-left">
          Digital Marketing Solutions that Drive Results
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 animate-fade-in">
          We help businesses grow online with tailored strategies in SEO, PPC, Social Media Marketing, and more. Our innovative approach ensures you stay ahead in a competitive digital world.
        </p>
        <button className="mt-8 bg-white text-black font-bold rounded-full py-4 px-10 shadow-lg hover:shadow-xl transform transition hover:scale-105 duration-300 ease-in-out animate-fade-in">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
