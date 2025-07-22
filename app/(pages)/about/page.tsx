'use client';

import React, { useState } from 'react';
import { Code, Palette, Smartphone, Search, Globe, Zap, Heart, Target, Lightbulb, Shield, Rocket, Users } from 'lucide-react';
import Image from 'next/image';
import projectImage1 from '../../public/web1.webp';
import projectImage2 from '../../public/web2.webp';

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

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Intro */}
      <section className="relative text-center py-24 px-6">
        <h1 className="text-white font-black text-5xl md:text-7xl tracking-tight" style={{ textShadow: '2px 2px #6b21a8' }}>
          Our Services
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
          We empower businesses with top-tier digital marketing, UI/UX, web, mobile, and SEO services — designed for growth and innovation.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-b from-black via-purple-900 to-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/5 p-6 rounded-2xl shadow-md hover:scale-105 transition transform backdrop-blur border border-white/10">
                <Icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission + Values */}
      <section className="bg-black py-20 px-6 space-y-20">
        {/* Mission */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Target className="w-16 h-16 text-purple-400 mx-auto" />
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We help companies grow with digital strategies that are smart, beautiful, and impactful. Our mission is to deliver results through innovation and excellence.
          </p>
          <div className="flex justify-center gap-12 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-white/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-purple-900/20 p-6 rounded-2xl border border-purple-800 shadow-md hover:shadow-lg transition">
                <div className="flex items-center space-x-4">
                  <Icon className="w-8 h-8 text-purple-300" />
                  <div>
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-white/70 text-sm">{value.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Case Studies (Optional) */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[projectImage1, projectImage2].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-lg border border-white/10">
                <Image src={img} alt={`Project ${i + 1}`} className="w-full h-[300px] object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
