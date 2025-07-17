import React from 'react';
import {
  FaSearch,
  FaBullhorn,
  FaShareAlt,
  FaChartLine,
  FaLaptopCode,
  FaShopify,
  FaPenAlt
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaSearch,
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO',
    description: 'Improve your website\'s visibility on search engines with our expert strategies in **Search Engine Optimization (SEO)**.',
  },
  {
    id: 2,
    icon: FaBullhorn,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    title: 'Pay-Per-Click (PPC)',
    shortTitle: 'PPC',
    description: 'Drive qualified traffic and boost sales using **Pay-Per-Click (PPC)** campaigns tailored to your audience.',
  },
  {
    id: 3,
    icon: FaShareAlt,
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-purple-600',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    description: 'Engage and grow your audience with targeted content through **Social Media Marketing**.',
  },
  {
    id: 4,
    icon: FaChartLine,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600',
    title: 'Conversion Rate Optimization (CRO)',
    shortTitle: 'CRO',
    description: 'Enhance user experience and boost revenue using **Conversion Rate Optimization (CRO)** techniques.',
  },
  {
    id: 5,
    icon: FaLaptopCode,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-700',
    title: 'Web Development',
    shortTitle: 'Web Dev',
    description: 'Design and build modern, fast websites with our **Web Development** services.',
  },
  {
    id: 6,
    icon: FaShopify,
    gradientFrom: 'from-green-400',
    gradientTo: 'to-green-600',
    title: 'Shopify Development',
    shortTitle: 'Shopify',
    description: 'Create seamless online stores with our scalable **Shopify Development** solutions.',
  },
  {
    id: 7,
    icon: FaPenAlt,
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-yellow-500',
    title: 'Blogging & Content Writing',
    shortTitle: 'Blogging',
    description: 'Communicate effectively with high-quality **Blogging & Content Writing** that speaks to your audience.',
  },
]

const Service = () => {
  return (
   <div className="min-h-[600px] bg-gradient-to-b from-pink-900 via-purple-900 to-black py-24">
       <div className="container px-6 mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative z-0 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden transition-all duration-300 h-20 hover:h-52 hover:z-10 hover:top-0"
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-4 p-4">
                <div
                  className={`bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} text-white rounded-full w-12 h-12 flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-xl font-bold">{service.shortTitle}</h3>
              </div>

              {/* Description */}
              <div className="px-4 pb-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                <p className="text-base text-purple-100 leading-relaxed">
                  {service.description.split('**').map((text, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-purple-300 font-semibold">
                        {text}
                      </strong>
                    ) : (
                      text
                    )
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
