import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const insideData = [
  {
    id: 1,
    index: "01",
    title: "Arrival",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=82",
    description: "Every great workout begins with the right atmosphere.",
    layoutClass: "layout-full-1"
  },
  {
    id: 2,
    index: "02",
    title: "The Club",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82",
    description: "Designed to keep you focused, motivated, and moving.",
    layoutClass: "layout-large-1"
  },
  {
    id: 3,
    index: "03",
    title: "Strength",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=82",
    description: "Commercial-grade equipment built for serious training.",
    layoutClass: "layout-small-1"
  },
  {
    id: 4,
    index: "04",
    title: "Personal Coaching",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=82",
    description: "Expert guidance tailored to your goals and progress.",
    layoutClass: "layout-full-2"
  },
  {
    id: 5,
    index: "05",
    title: "Recovery",
    image: "https://images.unsplash.com/photo-1544367567056-51e5e1aa6612?auto=format&fit=crop&w=1000&q=82",
    description: "Recovery is where tomorrow's performance begins.",
    layoutClass: "layout-small-2"
  },
  {
    id: 6,
    index: "06",
    title: "Coffee & Community",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=82",
    description: "Fresh coffee, protein drinks, and post-workout fuel made in-house.",
    layoutClass: "layout-large-2"
  }
];

function GalleryItem({ item }) {
  const ref = useRef(null);
  
  // Parallax: 20px offset up/down as it scrolls
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Framer Motion entry variants
  const containerVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const imageScaleVariants = {
    hidden: { scale: 1.05 },
    visible: { 
      scale: 1, 
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`inside-grid-item ${item.layoutClass}`}
    >
      <div className="inside-image-wrap">
        {/* Parallax layer */}
        <motion.div style={{ y, width: '100%', height: '100%' }}>
          {/* Entry scale layer */}
          <motion.div variants={imageScaleVariants} className="w-full h-full">
            {/* Hover scale layer */}
            <img src={item.image} alt={item.title} className="inside-image" />
          </motion.div>
        </motion.div>
      </div>

      <div className="inside-text">
        <motion.span variants={textVariants} className="inside-label">
          {item.index} &nbsp;&nbsp; {item.title}
        </motion.span>
        <motion.p variants={textVariants} className="inside-editorial-desc">
          {item.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function InsideSection() {
  return (
    <section className="bg-[#0B0B0B] w-full py-[160px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-16 lg:mb-24">
        <h2 className="text-bone text-[56px] md:text-[80px] lg:text-[100px] leading-[0.95] max-w-[10ch] mb-6 font-serif font-light tracking-[-0.01em]">
          Inside<br />INTENSE RIGOUR
        </h2>
        <p className="text-[rgba(238,232,220,0.7)] text-base md:text-lg max-w-xl leading-relaxed font-sans">
          Explore the spaces, atmosphere, and details that make every workout feel intentional. Every corner of the club is designed to support focus, performance, and recovery.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="inside-grid">
          {insideData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
