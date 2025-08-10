'use client';
import { useParams } from 'next/navigation';
import React, { useState,useEffect } from 'react';
import services from './servicesData'; // Adjust the import path
import stories from './servicesData';
import { motion } from 'framer-motion'; // For animations
import { ChevronDown, ChevronUp } from 'lucide-react'; 
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import img from "../../../public/herobg.jpeg"
import Image from 'next/image';
import Loading from '../../../components/Loading';


const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = stories[currentIndex];
 const [loading, setLoading] = useState(true);

  useEffect(() => {
 
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, []); 
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };
  // State for collapsible sections
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-red-600">Service not found</p>
      </div>
    );
  }

  const { title, description, overview, process, benefits, toolsUsed, caseStudy, additionalInfo } = service;

  return (
    <div className="min-h-screen bg-black
 py-16 px-4 sm:px-6 lg:px-8">
   {loading ? <Loading /> : null}
      <div className="max-w-5xl mx-auto">
 

  {/* main page title */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="shadow-sm border bg-purple-900/20 space-y-5  border-purple-800 backdrop-blur-lg rounded-lg p-6 mb-10"
>
 <h1
  className=" sm:left-8 text-2xl sm:text-4xl md:text-4xl lg:text-5xl lg:-top-8 font-bold text-white mb-4 drop-shadow"
>
  {title}
</h1>

  <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
    {description}
  </p>
</motion.div>

<div className='group'>
{/* Overview Section */}

<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mb-10"
>
  <div className="bg-purple-900/20  border-purple-800 backdrop-blur-lg border  rounded-2xl p-6 mb-15"
   data-aos="fade-down"
    data-aos-anchor-placement="top-bottom">
    <h2 className="absolute z-10 -top-5 left-8 text-2xl sm:text-3xl font-semibold text-white mb-4">Overview</h2>
    <p className="text-white/90 leading-relaxed ">{overview}</p>
  </div>
</motion.section>


{/* how we do + tools */}

<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="mb-10 "
>
  <div className="flex flex-col lg:flex-row gap-6 backdrop-blur-lg bg-purple-900/20  border-purple-800 border  rounded-2xl p-6 mb-15 relative">
    
    {/* Left Side: How We Do It */}
    <div className="lg:w-1/2 w-full relative z-10">
      <h2 className="absolute z-10 -top-11 left-8 text-2xl sm:text-3xl font-semibold text-white mb-4">
        How We Do It
      </h2>
      <p className="text-white text-base leading-relaxed pt-14 pb-10">{process}</p>
    </div>

    {/* Right Side: Tools We Use (Sliding Box) with isolated overflow-hidden */}
    <div className="lg:w-1/2 w-full relative overflow-hidden">
      <div
        className="absolute top-0 -right-[600px] bg-purple-900/20  border-purple-800 backdrop-blur-md border  rounded-2xl p-4 h-full w-full transition-all duration-500 group-hover:right-0"
        style={{ minHeight: "100%" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Tools We Use
        </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {toolsUsed.map((tool, index) => (
    <div
      key={index}
      className="w-auto min-w-[30px] bg-white/20 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform min-h-[60px] "
    >
      <span className="text-white text-sm font-medium">{tool.name}</span>
    </div>
  ))}
</div>


      </div>
    </div>

  </div>
</motion.section>

</div>


{/* why us  */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mb-10"
>
  <div className=" backdrop-blur-lg border bg-purple-900/20  border-purple-800 rounded-2xl p-6 mb-15 relative" 
  data-aos="fade-down"
    data-aos-anchor-placement="top-bottom"
  >
    <h2 className="absolute z-10 -top-5 left-8 text-2xl sm:text-3xl font-semibold text-white mb-4 w-full">
      Why Choose This Service
    </h2>

    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12" >
      {benefits.map((benefit, index) => (
        <li
          key={index}
          className=" overflow-hidden rounded-lg border border-purple-800 "
        >
          <div className=" flex items-start space-x-3 p-4 bg-purple-900/20 backdrop-blur-md rounded-lg "
          >
            <svg
              className="w-6 h-6 text-indigo-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className=" text-white text-base">{benefit}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
</motion.section>


 

        {/* sucess story */}

    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="relative bg-purple-900/20 border-purple-800 backdrop-blur-lg border rounded-2xl shadow-lg p-6 sm:p-10 mb-10"
  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"
>
  <h1 className="absolute z-10 -top-5 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-semibold text-white">
    Success Stories
  </h1>

  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full border bg-purple-900/20 border-purple-800 flex items-center justify-center text-white hover:bg-violet-600 transition-all backdrop-blur-md z-10"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full border bg-purple-900/20 border-purple-800 flex items-center justify-center text-white hover:bg-violet-600 transition-all backdrop-blur-md z-10"
  >
    <ChevronRight className="w-5 h-5" />
  </button>

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Left: Text */}
    <div className="lg:w-1/2 w-full text-white">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{caseStudy.title}</h2>
      <p className="text-base leading-relaxed">{caseStudy.summary}</p>
    </div>

    {/* Right: Image */}
    <div className="lg:w-1/2 w-full">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  </div>
</motion.section>


    

 {/* Additional Information Section */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="mb-10"
>
  <div
    className="border bg-purple-900/20 border-purple-800 backdrop-blur-lg rounded-2xl p-6"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
  >
    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
      Additional Information
    </h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 2c-2.76 0-5 2.24-5 5v4h10v-4c0-2.76-2.24-5-5-5z"
          />
        </svg>
        <p className="text-white font-medium">
          Pricing: {additionalInfo.pricing}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3"
          />
        </svg>
        <p className="text-white font-medium">
          Duration: {additionalInfo.duration}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <svg
          className="w-6 h-6 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <p className="text-white font-medium">
          Recommended For: {additionalInfo.recommendedFor}
        </p>
      </div>
    </div>
  </div>
</motion.section>


      </div>
    </div>
  );
};

export default ServicePage;