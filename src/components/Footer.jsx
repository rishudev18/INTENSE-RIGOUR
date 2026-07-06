import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const brand = "INTENSE RIGOUR";

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 xl:px-24 bg-[#090909] border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
      >
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white italic font-light mb-4 leading-tight">Strength starts with one decision.</h3>
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#b89b64] font-bold">Train Hard. Stay Consistent. Transform for Life.</p>
      </motion.div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <a href="#top" className="font-serif text-3xl text-white">{brand}</a>
        <div className="flex flex-wrap gap-8 text-white/50 font-sans text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex gap-6 text-white/50 font-sans text-xs uppercase tracking-widest" aria-label="Social links">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">Ig</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">In</a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">Yt</a>
        </div>
      </div>
    </footer>
  );
}
