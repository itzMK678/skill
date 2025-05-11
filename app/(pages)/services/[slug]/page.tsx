'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import services from './servicesData'; // Adjust the import path
import { motion } from 'framer-motion'; // For animations
import { ChevronDown, ChevronUp } from 'lucide-react'; // For icons

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{description}</p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
            aria-label={`Contact us about ${title}`}
          >
            Get Started
          </a>
        </motion.div>

        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </motion.section>

        {/* Process Section (Collapsible) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <button
            onClick={() => setIsProcessOpen(!isProcessOpen)}
            className="w-full flex justify-between items-center text-2xl sm:text-3xl font-semibold text-gray-800 focus:outline-none"
            aria-expanded={isProcessOpen}
            aria-controls="process-content"
          >
            <span>How We Do It</span>
            {isProcessOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
          {isProcessOpen && (
            <motion.div
              id="process-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-gray-700 leading-relaxed"
            >
              <p>{process}</p>
            </motion.div>
          )}
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Why Choose This Service</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-indigo-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Tools Used Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Tools We Use</h2>
          <div className="flex flex-wrap gap-3">
            {toolsUsed.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Case Study Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-indigo-50 rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Success Story</h2>
          <h3 className="text-xl font-medium text-gray-900">{caseStudy.title}</h3>
          <p className="text-gray-700 mt-2">{caseStudy.summary}</p>
        </motion.section>

        {/* Features Section (Collapsible) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <button
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            className="w-full flex justify-between items-center text-2xl sm:text-3xl font-semibold text-gray-800 focus:outline-none"
            aria-expanded={isFeaturesOpen}
            aria-controls="features-content"
          >
            <span>Key Features</span>
            {isFeaturesOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
          {isFeaturesOpen && (
            <motion.ul
              id="features-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="list-disc pl-6 mt-4 space-y-2 text-gray-700"
            >
              {additionalInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </motion.ul>
          )}
        </motion.section>

        {/* Additional Information Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Additional Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 2c-2.76 0-5 2.24-5 5v4h10v-4c0-2.76-2.24-5-5-5z" />
              </svg>
              <p className="text-gray-700 font-medium">Pricing: {additionalInfo.pricing}</p>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <p className="text-gray-700 font-medium">Duration: {additionalInfo.duration}</p>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <p className="text-gray-700 font-medium">Recommended For: {additionalInfo.recommendedFor}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicePage;