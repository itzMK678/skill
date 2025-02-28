import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Section */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#9b4de3_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="flex flex-col w-full md:w-full justify-center items-center text-center md:text-left">
          <p className="uppercase tracking-wide text-white text-lg font-semibold mb-4 animate-fade-in">
            Elevate Your Brand with Cutting-Edge Digital Strategies
          </p>
          <h1 className="my-4 text-5xl font-extrabold leading-tight text-white transform transition duration-500 ease-in-out hover:scale-105 animate-slide-in-left">
            Digital Marketing Solutions that Drive Results
          </h1>
          <p className="leading-normal text-xl text-center mb-8 text-gray-200 animate-fade-in">
            We help businesses grow online with tailored strategies in SEO, PPC, Social Media Marketing, and more. Our innovative approach ensures you stay ahead in a competitive digital world.
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:shadow-xl transform transition hover:scale-105 duration-300 ease-in-out animate-fade-in">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
