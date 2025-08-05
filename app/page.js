'use client'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import HeroSection from './components/home/HeroSection';
import About from './components/home/About';
import Service from './components/home/Service';
import Review from './components/home/Review';
import Contact from './components/home/Contact';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavBar'


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
      {/* <NoiseDemo/> */}
      <TopNavbar/>
      <Navbar/>
      
      <HeroSection/>
      <About/>
      <Service/>
      <Review/>
      <Contact/>
      <Footer/>
       
      </div>
    </div>
  );
};

export default Home;