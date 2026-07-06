import React from 'react';
import { motion } from 'framer-motion';

const candidImages = [
  "/images/candid_1.png",
  "/images/candid_2.png",
  "/images/candid_3.png",
  "/images/candid_4.png"
];

const moments = [
  "Morning training",
  "Weekend challenges",
  "Personal bests",
  "Coffee after workouts",
  "Competitions"
];

export default function AboutCommunity() {
  return (
    <section className="bg-[#090909] pt-32 pb-48 w-full relative z-30 overflow-hidden">
      
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 flex flex-col justify-between items-start gap-12">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold text-white/50 mb-10"
          >
            Community
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
          >
            You're not joining a gym.<br/>
            <span className="text-white/50 italic">You're joining people who refuse to settle.</span>
          </motion.h2>
        </div>
      </div>

      {/* Cinematic Collage */}
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[450px]">
          
          {/* Main large image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-8 md:row-span-2 overflow-hidden"
          >
            <img src={candidImages[0]} alt="Community candid" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>

          {/* Top right image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 overflow-hidden hidden md:block"
          >
            <img src={candidImages[1]} alt="Community candid" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          
          {/* Bottom right image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 overflow-hidden"
          >
            <img src={candidImages[3]} alt="Community candid" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>

        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32">
        
        {/* Small moments list */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {moments.map((moment, i) => (
            <div key={i} className="text-white/60 font-serif text-2xl md:text-3xl italic tracking-wide">
              {moment}
            </div>
          ))}
        </motion.div>

        {/* Tiny copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-sm pt-4 md:pt-0"
        >
          <p className="font-sans text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            Progress becomes easier when you're surrounded by people chasing it too.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
