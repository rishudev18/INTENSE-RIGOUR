import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="bg-[#090909] py-32 md:py-64 w-full relative z-30 flex items-center justify-center text-center border-t border-white/5">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-[140px] font-serif text-white uppercase tracking-tighter leading-[0.9] mb-16"
        >
          Your Story<br/>
          <span className="text-white/50 italic tracking-tight">Starts Here.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="text-white/60 font-sans text-xl md:text-2xl font-light">
            Ready to take the first step?
          </p>
          <Link 
            to="/membership" 
            className="inline-block border border-white/30 px-12 py-5 text-sm md:text-base uppercase tracking-[0.2em] font-sans font-medium hover:bg-white hover:text-black transition-colors duration-500"
          >
            Book A Trial
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
