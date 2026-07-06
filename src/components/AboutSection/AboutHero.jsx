import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutHero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-end justify-center overflow-hidden bg-[#090909]">
      {/* Cinematic Group Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        {/* Placeholder: Gym community / group of people */}
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
          alt="The Community" 
          className="w-full h-full object-cover object-center grayscale opacity-90 mix-blend-luminosity"
        />
      </motion.div>

      {/* Centered Bottom Text */}
      <div className="relative z-20 w-full px-6 pb-24 md:pb-32 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-[0.1em] uppercase drop-shadow-lg">
            Intense Rigour
          </h1>
          
          <span className="text-[#F2E9DC] font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase font-bold drop-shadow-md">
            Forging Extraordinary Habits
          </span>
        </motion.div>
      </div>
    </section>
  );
}
