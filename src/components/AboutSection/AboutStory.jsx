import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutStory() {
  const { scrollYProgress } = useScroll();
  // We use a general scroll progress for a subtle parallax, but ideally, 
  // you'd track the specific element. For simplicity and broad effect, this works well.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 }
    }
  };

  return (
    <section className="bg-[#090909] text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 text-center mb-16 md:mb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          className="flex flex-col items-center gap-8"
        >
          <motion.span variants={textVariants} className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans font-bold text-white/50">
            The Origin
          </motion.span>
          <motion.h2 variants={textVariants} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] max-w-4xl">
            Built from necessity.<br/>
            Forged by discipline.
          </motion.h2>
        </motion.div>
      </div>

      {/* 2. Cinematic Image Reveal */}
      <div className="w-full relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div 
          className="w-full h-full"
          style={{ scale: imageScale }}
        >
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="The early days" 
            className="w-full h-full object-cover object-center grayscale opacity-80"
          />
        </motion.div>
      </div>

      {/* 3. Narrative Split Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 mt-16 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column (Empty on Desktop for luxury whitespace) */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Right Column (Narrative) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <motion.p variants={textVariants} className="text-lg md:text-xl font-sans text-white/70 font-light leading-[1.8]">
              We didn't set out to build another gym. We built the space we needed—a place where the noise of modern fitness was stripped away, leaving only the iron, the effort, and the community.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg md:text-xl font-sans text-white/70 font-light leading-[1.8]">
              It started with a singular vision: to create an environment that demanded excellence. No shortcuts, no gimmicks. Just calibrated equipment, expert coaching, and an atmosphere that expects your best.
            </motion.p>
            
            {/* Signature / Timeline Date */}
            <motion.div variants={textVariants} className="mt-8 pt-8 border-t border-white/10">
              <span className="font-serif text-white/50 italic text-xl">Est. 2024</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
