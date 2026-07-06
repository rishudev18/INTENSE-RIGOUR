import React from 'react';
import { motion } from 'framer-motion';

const standards = [
  {
    number: "01",
    title: "Precision",
    desc: "No random workouts. No wasted effort.",
    image: "/images/precision.png"
  },
  {
    number: "02",
    title: "Consistency",
    desc: "Consistency wins.",
    image: "/images/consistency.png"
  },
  {
    number: "03",
    title: "Coaching",
    desc: "Every correction. Every cue. Every conversation matters.",
    image: "/images/coaching.png"
  },
  {
    number: "04",
    title: "Community",
    desc: "Progress is personal. Growth is shared.",
    image: "/images/community.png"
  }
];

export default function AboutStandard() {
  return (
    <section className="bg-[#090909] w-full relative">
      
      {/* Intro Screen */}
      <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center text-center px-6 z-0 bg-[#090909]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold text-white/50 mb-12">
            The Standard
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] max-w-4xl mx-auto">
            The principles that guide<br />
            every workout, every coach,<br />
            <span className="text-white/50 italic">and every member.</span>
          </h2>
        </motion.div>
      </div>

      {/* Chapters Container */}
      <div className="relative z-10 w-full">
        {standards.map((standard, index) => (
          <div key={index} className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-end shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Background Image with motion scale */}
            <div className="absolute inset-0 w-full h-full bg-[#090909]">
              <motion.div
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img 
                  src={standard.image} 
                  alt={standard.title} 
                  className="w-full h-full object-cover opacity-60" 
                />
                {/* Dark gradient overlay for text readability and cinematic feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pb-20 md:pb-32 flex flex-col"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-white/50 font-serif text-3xl md:text-5xl italic mb-6 md:mb-8"
              >
                {standard.number}
              </motion.div>
              
              <motion.h3 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } }
                }}
                className="text-6xl md:text-8xl lg:text-[160px] font-serif text-white tracking-tight uppercase leading-[0.85] mb-8 md:mb-12"
              >
                {standard.title}
              </motion.h3>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } }
                }}
                className="font-sans text-2xl md:text-4xl lg:text-5xl text-white/90 font-light max-w-3xl leading-tight"
              >
                {standard.desc}
              </motion.p>
            </motion.div>
            
          </div>
        ))}
      </div>

    </section>
  );
}
