import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function MembershipHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle slow zoom and parallax for the background image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-[#0B0B0B] flex items-center">
      {/* Background Media with Framer Motion slow zoom and parallax */}
      <motion.div 
        style={{ scale, y }} 
        className="absolute inset-0 w-full h-full origin-bottom"
      >
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=82"
          alt="Member deadlifting in a premium gym environment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay 70% */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="font-sans text-[0.72rem] md:text-sm font-medium tracking-[0.15em] uppercase text-[#b89b64]">
              Membership
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-bone text-[46px] md:text-[64px] lg:text-[80px] leading-[0.95] font-serif font-light tracking-[-0.01em]"
          >
            Choose a membership built around your goals.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-[rgba(238,232,220,0.7)] text-base md:text-[1.1rem] leading-relaxed font-sans max-w-xl"
          >
            Premium facilities, expert coaching, recovery, and nutrition—all designed to help you train without compromise.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            {/* Dominant Primary Button */}
            <a 
              href="#plans" 
              className="bg-bone text-ink px-8 py-4 rounded-full font-sans text-xs md:text-sm tracking-wide uppercase font-semibold hover:bg-white transition-colors flex items-center gap-2"
            >
              Explore Memberships
            </a>
            
            {/* Secondary Outline Button */}
            <a 
              href="#tour" 
              className="border border-[rgba(238,232,220,0.3)] text-bone px-8 py-4 rounded-full font-sans text-xs md:text-sm tracking-wide uppercase font-semibold hover:border-bone hover:bg-[rgba(238,232,220,0.05)] transition-all flex items-center gap-2"
            >
              Book a Club Tour
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
