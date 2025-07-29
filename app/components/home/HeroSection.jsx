// import React from 'react';
// const handleScroll = () => {
//     window.scrollBy({ top: 500, behavior: "smooth" });
//   };
// const HeroSection = () => {
//   return (
//     <div className="relative h-fit md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
//       <div className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm opacity-70 -z-10" />
//       <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
//         <p className="uppercase tracking-widest text-gray-300 text-lg font-semibold mb-4 animate-fade-in">
//           Elevate Your Brand with Cutting-Edge Digital Strategies
//         </p>
//         <h1 className= "text-5xl md:text-6xl font-extrabold leading-tight text-white transform transition duration-500 ease-in-out hover:scale-105 animate-slide-in-left drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
//         >
//           Digital Marketing Solutions that Drive Results
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mt-6 animate-fade-in">
//           We help businesses grow online with tailored strategies in SEO, PPC, Social Media Marketing, and more. Our innovative approach ensures you stay ahead in a competitive digital world.
//         </p>
//         <button onClick={handleScroll} className="mt-8 bg-white text-black font-bold rounded-full py-4 px-10 shadow-lg hover:shadow-xl transform transition hover:scale-105 duration-300 ease-in-out animate-fade-in">
//           Discover more
//         </button>
//       </div>
//     </div> // ✅ this is the only correct closing tag needed
//   );
// };

// export default HeroSection;
  
import React from 'react';

const handleScroll = () => {
  window.scrollBy({ top: 500, behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <div className="relative h-fit md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm opacity-40 -z-10" />
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
        <p className="uppercase tracking-widest text-purple-400 text-lg font-semibold mb-4 ">
          Elevate Your Brand with Cutting-Edge Digital Strategies
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white hover:scale-105 transition-transform duration-500 "style={{ textShadow: '2px 2px #6b21a8' }}v>
          Digital Marketing Solutions that Drive Results
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          We help businesses grow online with tailored strategies in SEO, PPC, Social Media Marketing, and more.
        </p>
        <button
          onClick={handleScroll}
          className="mt-8 bg-white text-black font-bold rounded-full py-4 px-10 shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Discover more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;


