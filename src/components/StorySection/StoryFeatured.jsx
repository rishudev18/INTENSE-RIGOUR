import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const StatItem = ({ label, value }) => (
  <div className="flex flex-col py-3 border-b border-white/10 last:border-0">
    <span className="text-white/40 font-sans text-[0.6rem] tracking-[0.2em] uppercase mb-1">{label}</span>
    <span className="text-white font-sans text-sm tracking-wide">{value}</span>
  </div>
);

export default function StoryFeatured({ story, onOpenModal, activeIndex, stories, onChangeStory }) {
  const prevIndex = stories && activeIndex > 0 ? activeIndex - 1 : (stories ? stories.length - 1 : 0);
  const nextIndex = stories && activeIndex < (stories.length - 1) ? activeIndex + 1 : 0;
  
  const prevStory = stories?.[prevIndex];
  const nextStory = stories?.[nextIndex];

  // Variants for the 500-700ms premium transitions
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
      
      {/* SVG Defs for Clip Path */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-top-left" clipPathUnits="objectBoundingBox">
            <path
              d="M1 0.0417599 C1 0.0186966 0.9749279 0 0.944 0 H0.3895 C0.358572 0 0.3335 0.0186965 0.3335 0.0417599 V0.148024 C0.3335 0.171087 0.308428 0.189784 0.2775 0.189784 H0.056 C0.025072 0.189784 0 0.20848 0 0.231544 V0.95824 C0 0.981303 0.025072 1 0.056 1 H0.944 C0.9749279 1 1 0.981303 1 0.95824 V0.0417599 Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* LEFT SIDE: Cinematic Video Thumbnail (60%) */}
      <div className="w-full lg:w-3/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={story.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3] cursor-pointer"
            onClick={onOpenModal}
          >
            {/* Clipped Image Container */}
            <div 
              className="absolute inset-0 w-full h-full group overflow-hidden bg-black"
              style={{ clipPath: 'url(#clip-top-left)' }}
            >
              {/* Image with zoom on hover */}
              <motion.img 
                src={story.thumbnail}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                style={{ filter: 'grayscale(20%) contrast(1.1)' }}
              />
              
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
              
              {/* Premium Frosted Glass Play Button (Center) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-full flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-white/20 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] group-hover:border-white/50">
                    <Play className="text-white w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" />
                  </div>
                  {/* Hover Pill - Optional but nice context */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
                    <span className="text-white font-serif text-sm md:text-base">{story.name.split(' ')[0]}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-white/80 font-sans text-xs tracking-wider uppercase">{story.transformation}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-white/80 font-sans text-xs tracking-wider uppercase">{story.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW: Floating CineVine-Style Badge positioned in the cutout space (Top Left) */}
            <div className="absolute top-0 left-0 w-[33%] h-[23%] flex flex-col justify-center items-start pl-3 pt-3 md:pl-5 md:pt-4 z-20 overflow-hidden">
              <h3 className="text-white font-serif text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-[1.25]">
                Hear from our members who changed their lives.
              </h3>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT SIDE: Editorial Content (40%) */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={story.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Headline & Description */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.1] mb-4 whitespace-pre-line">
                {story.headline || "Every Transformation\nStarts With One Decision."}
              </h2>
              
              <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line max-w-sm">
                Every member starts somewhere.<br />Watch how discipline, expert coaching, and consistency changed their lives.
              </p>
            </motion.div>

            {/* Data Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-x-12 mb-8"
              variants={itemVariants}
            >
              <div className="flex flex-col">
                <StatItem label="Name" value={story.name} />
                <StatItem label="Coach" value={story.coach} />
              </div>
              <div className="flex flex-col">
                <StatItem label="Age" value={story.age} />
                <StatItem label="Focus" value={story.focus} />
              </div>
            </motion.div>

            {/* Featured Quote */}
            <motion.div 
              className="mb-8 relative"
              variants={itemVariants}
            >
              <div className="w-8 h-[1px] bg-[#F2E9DC]/30 mb-6" />
              {/* Oversized faint quotation mark in background */}
              <span className="absolute top-0 left-0 -translate-x-3 -translate-y-4 text-[80px] md:text-[100px] leading-none font-serif text-white/5 select-none pointer-events-none">
                &ldquo;
              </span>
              <p className="relative z-10 text-lg md:text-xl font-serif italic text-white/90 leading-snug whitespace-pre-line pl-2 border-l border-white/10">
                {story.quote}
              </p>
            </motion.div>

            {/* Action & Navigation */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              variants={itemVariants}
            >
              <button 
                onClick={onOpenModal}
                className="bg-[#F2E9DC] text-[#090909] px-8 py-4 rounded-full font-sans text-xs tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors flex items-center gap-3 group w-max"
              >
                Watch Story
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              {/* Arrow Navigation */}
              {stories?.length > 1 && (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => onChangeStory && onChangeStory(prevIndex)}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="Previous story"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  </button>
                  <button 
                    onClick={() => onChangeStory && onChangeStory(nextIndex)}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#090909] flex items-center justify-center hover:bg-[#F2E9DC] transition-colors shadow-lg"
                    aria-label="Next story"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
