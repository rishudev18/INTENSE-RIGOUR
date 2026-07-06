import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutSection/AboutHero';
import AboutPhilosophy from '../components/AboutSection/AboutPhilosophy';
import AboutFounder from '../components/AboutSection/AboutFounder';
import AboutStandard from '../components/AboutSection/AboutStandard';
import AboutSpace from '../components/AboutSection/AboutSpace';
import AboutCommunity from '../components/AboutSection/AboutCommunity';
import AboutCTA from '../components/AboutSection/AboutCTA';

export default function About() {
  // Ensure smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#090909] min-h-screen text-white font-sans selection:bg-[#F2E9DC] selection:text-[#090909]">
      <Navbar />
      
      {/* Page Content Container with smooth fade-in */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <AboutHero />
        <AboutPhilosophy />
        
        {/* Sticky Stacking Section Wrapper */}
        <div className="relative">
          <div className="sticky top-0 z-10">
            <AboutFounder />
          </div>
          <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <AboutStandard />
          </div>
        </div>
        
        <AboutSpace />
        <AboutCommunity />
        <AboutCTA />
        
      </motion.main>
      
      <Footer />
    </div>
  );
}
