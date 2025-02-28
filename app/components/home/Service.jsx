import React from 'react';
import { FaSearch, FaBullhorn, FaShareAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: FaSearch,
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800',
    title: 'Search Engine Optimization (SEO)',
    description:
      'Improve your website\'s visibility on search engines and drive organic traffic with our proven SEO strategies.',
  },
  {
    id: 2,
    icon: FaBullhorn,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    title: 'Pay-Per-Click (PPC)',
    description:
      'Maximize your ROI with targeted PPC campaigns that drive qualified leads and boost conversions.',
  },
  {
    id: 3,
    icon: FaShareAlt,
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-purple-600',
    title: 'Social Media Marketing',
    description:
      'Build brand awareness and engage with your audience on platforms like Facebook, Instagram, and Twitter.',
  },
  {
    id: 4,
    icon: FaChartLine,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600',
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Optimize your website to increase the number of visitors who take your desired actions—turning leads into customers.',
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-br from-black to-purple-900 py-24">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-1/2 lg:w-1/4 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
                <div
                  className={`bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to increase your organic reach, drive paid traffic, or convert visitors into leads, we have a tailored solution for you. Let’s take your business to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
