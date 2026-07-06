import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const spaces = [
  {
    title: "Strength Floor",
    desc: "Built for serious training.",
    image: "/images/space_strength.png"
  },
  {
    title: "Recovery Zone",
    desc: "Progress doesn't stop when the workout ends.",
    image: "/images/space_recovery.png"
  },
  {
    title: "Functional Area",
    desc: "Move better. Train smarter.",
    image: "/images/space_functional.png"
  },
  {
    title: "Community Space",
    desc: "Where training becomes conversation.",
    image: "/images/space_community.png"
  }
];

const SpaceSection = ({ space, index }) => {
  const isEven = index % 2 === 0;
  
  // Ref for the section to control parallax
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative w-full min-h-[80vh] md:min-h-screen py-20 flex items-center justify-center overflow-hidden">
      <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 h-[50vh] md:h-[75vh] overflow-hidden"
        >
          <motion.div style={{ y: yImage }} className="w-full h-[130%]">
            <img src={space.image} alt={space.title} className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-1000" />
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-tight leading-tight">
            {space.title}
          </h3>
          <p className="text-xl md:text-2xl font-sans text-white/60 font-light max-w-md">
            {space.desc}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default function AboutSpace() {
  return (
    <section className="bg-[#090909] pt-32 pb-16 w-full relative z-30">
      
      {/* Intro */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold text-white/50 mb-10"
        >
          The Space
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-3xl mx-auto"
        >
          Designed to help you<br/>
          <span className="text-white/50 italic">perform at your best.</span>
        </motion.h2>
      </div>

      {/* The Spaces */}
      <div className="flex flex-col gap-12 md:gap-0">
        {spaces.map((space, index) => (
          <SpaceSection key={index} space={space} index={index} />
        ))}
      </div>

    </section>
  );
}
