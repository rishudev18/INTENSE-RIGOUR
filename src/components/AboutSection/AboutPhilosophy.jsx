import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPhilosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-[#090909] text-[#F2E9DC] py-32 md:py-48 lg:py-64 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        >
          
          {/* Left Column: Manifesto Statement */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="mb-12">
              <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-white/40">
                Our Philosophy
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.05] tracking-tight text-white"
            >
              Strength isn't built overnight.<br/>
              <span className="text-white/50">Neither is character.</span>
            </motion.h2>
          </div>

          {/* Right Column: Paragraph */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-end h-full lg:pt-32"
          >
            <p className="font-sans text-lg md:text-xl lg:text-2xl leading-[1.6] text-white/70 max-w-xl font-light">
              At Intense Rigour, we don't believe in shortcuts. Every program, every coach, and every environment is built around one principle: sustainable progress. 
              <br/><br/>
              We help ordinary people build extraordinary habits through discipline, expert guidance, and a culture that values consistency over intensity alone.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
