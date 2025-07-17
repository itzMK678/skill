'use client';

import React, { useState } from 'react';
import { Code, Palette, Smartphone, Search, Globe, Zap, Heart, Target, Lightbulb, Shield, Rocket, Users } from 'lucide-react';

 const services = [
    { icon: Code, title: 'Web Development', desc: 'Custom websites & apps' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful user experiences' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android solutions' },
    { icon: Search, title: 'SEO Optimization', desc: 'Boost your visibility' },
    { icon: Globe, title: 'E-commerce', desc: 'Online store solutions' },
    { icon: Zap, title: 'Performance', desc: 'Lightning-fast sites' }
  ];

  const values = [
    { icon: Heart, title: 'Integrity', desc: 'Honest & transparent work' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Cutting-edge solutions' },
    { icon: Shield, title: 'Quality', desc: 'Excellence in every detail' },
    { icon: Users, title: 'Collaboration', desc: 'Partnership approach' }
  ];
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation or sending to API)
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Map Section */}
      <div className="relative w-full">
     <div className="h-[150px] w-full bg-gradient-to-b from-black to-white">.</div>

        {/* Floating Heading */}
      <p
  className="absolute top-[40px] left-1/2 -translate-x-1/2 z-10 text-white font-black"
  style={{
    fontSize: 'clamp(2rem, 10vw, 90px)',
    textShadow:
      '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
  }}
>
  About-Us
</p>

         <p className="pt-[50px] text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed">
          We are a digital marketing agency passionate about driving business growth through innovative online solutions. From SEO to social media strategies, we empower brands to reach their full potential.
        </p>
      </div>

<div className="w-full flex flex-col gap-6 p-6 bg-gray-100">
  {/* Slider container */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          
          {/* Services Card - Expandable */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100">
            {/* Main Services Header */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col items-center justify-center text-center p-6 z-20 transition-all duration-700 group-hover:-translate-y-full">
              <Code className="w-16 h-16 mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-2">Our Services</h2>
              <p className="text-blue-100 text-sm">Hover to explore what we offer</p>
            </div>

            {/* Services Grid - Revealed on Hover */}
            <div className="absolute inset-0 bg-white p-4 transition-all duration-700 translate-y-full group-hover:translate-y-0">
              <div className="h-full grid grid-cols-2 gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      <Icon className="w-8 h-8 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.title}</h4>
                      <p className="text-gray-600 text-xs leading-tight">{service.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100">
            {/* Values Header */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white flex flex-col items-center justify-center text-center p-6 z-20 transition-all duration-700 group-hover:-translate-y-full">
              <Heart className="w-16 h-16 mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-2">Our Values</h2>
              <p className="text-emerald-100 text-sm">The principles that guide us</p>
            </div>

            {/* Values Content */}
            <div className="absolute inset-0 bg-white p-6 transition-all duration-700 translate-y-full group-hover:translate-y-0">
              <div className="h-full flex flex-col justify-center space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 hover:shadow-md transition-all duration-300 border border-emerald-100"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animation: 'slideInLeft 0.6s ease-out forwards'
                      }}
                    >
                      <Icon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100">
            {/* Mission Header */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 text-white flex flex-col items-center justify-center text-center p-6 z-20 transition-all duration-700 group-hover:-translate-y-full">
              <Target className="w-16 h-16 mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-purple-100 text-sm">Driving digital transformation</p>
            </div>

            {/* Mission Content */}
            <div className="absolute inset-0 bg-white p-6 transition-all duration-700 translate-y-full group-hover:translate-y-0 flex flex-col justify-center">
              <div className="text-center space-y-6">
                <Rocket className="w-20 h-20 text-purple-600 mx-auto opacity-80" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Empowering Digital Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're dedicated to transforming businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in the modern world.
                  </p>
                  <div className="flex justify-center space-x-8 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
</div>

    </div>
  );
};

export default ContactPage;

