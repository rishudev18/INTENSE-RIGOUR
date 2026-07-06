import React from 'react';
import { motion } from 'framer-motion';

export default function AboutFounder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="w-full h-[100dvh] bg-[#EBE7E0] text-[#1A1A1A] relative flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="w-full h-full max-w-[100rem] mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center">
        
        {/* Left: Cutout Portrait */}
        <motion.div 
          className="w-full lg:w-1/2 h-[45%] lg:h-[80%] relative flex justify-center lg:justify-start items-end"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Using a studio portrait and multiply blend mode to simulate a clean cutout on the cream background */}
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80" 
            alt="Rohit Sharma - Founder" 
            className="h-full object-contain object-bottom mix-blend-multiply contrast-125 grayscale"
          />
        </motion.div>

        {/* Right: The Narrative */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center pt-8 lg:pt-0 lg:pl-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* 1. Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-gray-400">
              ROHIT'S STORY //
            </span>
          </motion.div>

          {/* 2. Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-none tracking-tight uppercase">
              Rohit Sharma
            </h2>
          </motion.div>

          {/* 3. Founder Quote */}
          <motion.div variants={itemVariants} className="mb-8 max-w-xl">
            <p className="font-serif italic text-xl md:text-2xl lg:text-[1.75rem] text-[#333333] leading-snug">
              "Strength isn't built in a single workout. It's built by showing up, even on the days you don't feel like it."
            </p>
          </motion.div>

          {/* 4. Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
              — FOUNDER & HEAD COACH
            </p>
          </motion.div>

          {/* 5. Information Grid */}
          <motion.div variants={itemVariants} className="flex flex-col gap-y-4 max-w-md">
            
            <div className="grid grid-cols-12 items-baseline">
              <h4 className="col-span-5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Experience
              </h4>
              <p className="col-span-7 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#B23A30]">
                10+ Years
              </p>
            </div>

            <div className="grid grid-cols-12 items-baseline">
              <h4 className="col-span-5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Philosophy
              </h4>
              <p className="col-span-7 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#B23A30]">
                Discipline Over Motivation
              </p>
            </div>

            <div className="grid grid-cols-12 items-baseline">
              <h4 className="col-span-5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Background
              </h4>
              <p className="col-span-7 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#B23A30]">
                Strength Training
              </p>
            </div>

            <div className="grid grid-cols-12 items-baseline">
              <h4 className="col-span-5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Mission
              </h4>
              <p className="col-span-7 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#B23A30]">
                Build Better Lives
              </p>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
