'use client'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import HeroSection from './components/home/HeroSection';
import About from './components/home/About';
import Service from './components/home/Service';
import Review from './components/home/Review';
import Contact from './components/home/Contact';
import { NoiseDemo } from './components/spash-container';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-black text-white">
      {loading ? <Loading /> : null}
      <div>
      <NoiseDemo/>
      <HeroSection/>
      <About/>
      <Service/>
      <Review/>
      <Contact/>
       
      </div>
    </div>
  );
};

export default Home;