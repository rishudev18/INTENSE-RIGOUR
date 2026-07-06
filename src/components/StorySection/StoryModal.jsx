import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function StoryModal({ isOpen, onClose, stories, activeIndex, onChangeStory }) {
  const story = stories[activeIndex];
  const total = stories.length;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === total - 1;
  
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = useCallback((e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  // Reset video state when modal closes or story changes
  useEffect(() => {
    setIsPlaying(false);
  }, [isOpen, activeIndex]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && !isLast) onChangeStory(activeIndex + 1);
      else if (e.key === "ArrowLeft" && !isFirst) onChangeStory(activeIndex - 1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, isFirst, isLast, onChangeStory, onClose]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Fade Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
          />

          {/* Modal Content - Split Screen */}
          <motion.div
            className="relative w-full max-w-7xl bg-[#0F0F0F] rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[90vh]"
            initial={{ y: 0, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 0, scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Close Button (Floating over everything) */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col md:flex-row w-full h-full"
              >
                {/* LEFT SIDE: Video Player (Sticky) */}
                <motion.div variants={itemVariants} className="relative w-full md:w-1/2 h-[40vh] md:h-full bg-black group shrink-0">
                  <video
                    ref={videoRef}
                    src={story.video}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {/* Custom Video Player Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20" onClick={handlePlayVideo}>
                      <button className="flex flex-col items-center gap-4 transition-transform duration-500 hover:scale-105">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                          <Play className="text-white w-8 h-8 ml-2" fill="currentColor" />
                        </div>
                        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 border border-white/10">
                          <span className="text-white font-serif text-sm">{story.name}</span>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/80 font-sans text-xs tracking-wider uppercase">{story.transformation}</span>
                          <span className="w-1 h-1 rounded-full bg-white/30" />
                          <span className="text-white/80 font-sans text-xs tracking-wider uppercase">{story.duration}</span>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Story Indicator overlay on video */}
                  <div className="absolute top-6 left-8 z-20 pointer-events-none">
                    <span className="text-white/60 font-sans text-xs tracking-[0.2em] uppercase font-bold drop-shadow-md">
                      Story {activeIndex + 1} / {total}
                    </span>
                  </div>
                </motion.div>

                {/* RIGHT SIDE: Scrollable Description & Timeline */}
                <div className="w-full md:w-1/2 h-full flex flex-col relative bg-[#0F0F0F]">
                  <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar p-8 md:p-12 lg:p-16">
                    
                    {/* Name & Title */}
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                      {story.name}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-[#F2E9DC] font-sans text-xs tracking-widest uppercase font-bold mb-12">
                      A Story of Progress
                    </motion.p>

                    {/* Quick Stats Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 mb-16 border-y border-white/10 py-10">
                      <div className="flex flex-col">
                        <span className="text-3xl lg:text-4xl font-serif text-white mb-2">{story.transformation.split(' ')[0]}</span>
                        <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold">Transformation</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl lg:text-4xl font-serif text-white mb-2">{story.duration.split(' ')[0]}</span>
                        <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold">Months</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl lg:text-4xl font-serif text-white mb-2">{story.achievements.length}</span>
                        <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold">Milestones</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl lg:text-4xl font-serif text-white mb-2">{story.memberSince}</span>
                        <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold">Joined</span>
                      </div>
                    </motion.div>

                    {/* Member Quote */}
                    <motion.div variants={itemVariants} className="mb-16">
                      <div className="w-12 h-[1px] bg-[#F2E9DC]/30 mb-6" />
                      <p className="text-2xl font-serif italic text-white/90 leading-snug whitespace-pre-line">
                        "{story.quote}"
                      </p>
                    </motion.div>

                    {/* The Beginning */}
                    <motion.div variants={itemVariants} className="mb-12">
                      <h3 className="text-xl font-serif text-white mb-6">The Beginning</h3>
                      <p className="text-white/70 font-sans leading-relaxed whitespace-pre-line text-lg">
                        {story.fullStory || story.supportText}
                      </p>
                    </motion.div>

                    {/* The Journey */}
                    {story.journey && (
                      <motion.div variants={itemVariants} className="mb-12">
                        <h3 className="text-xl font-serif text-white mb-6">The Journey</h3>
                        <p className="text-white/70 font-sans leading-relaxed text-lg">
                          {story.journey}
                        </p>
                      </motion.div>
                    )}

                    {/* Achievements */}
                    <motion.div variants={itemVariants} className="mb-16">
                      <h3 className="text-xl font-serif text-white mb-6">Achievements</h3>
                      <ul className="space-y-4">
                        {story.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#F2E9DC] mt-2.5 shrink-0" />
                            <span className="text-white/80 font-sans text-base">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Coach Details */}
                    <motion.div variants={itemVariants} className="mb-8">
                      <div className="bg-[#151515] p-6 rounded-[20px] border border-white/5 grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] mb-2 font-bold">Coach</p>
                          <p className="text-white font-sans text-sm">{story.coach}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] mb-2 font-bold">Focus</p>
                          <p className="text-white font-sans text-sm">{story.focus}</p>
                        </div>
                      </div>
                    </motion.div>

                  </div>

                  {/* Navigation Bar — Sticky Footer */}
                  <div className="shrink-0 border-t border-white/10 bg-[#0F0F0F]/90 backdrop-blur-md p-6 lg:p-8 flex items-center justify-between z-20">
                    <button
                      onClick={() => !isFirst && onChangeStory(activeIndex - 1)}
                      disabled={isFirst}
                      className={`flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase font-bold transition-colors ${isFirst ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-white'}`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Prev
                    </button>

                    <div className="flex gap-2">
                      {stories.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => onChangeStory(i)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-6 bg-[#F2E9DC]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                          aria-label={`Go to story ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => !isLast && onChangeStory(activeIndex + 1)}
                      disabled={isLast}
                      className={`flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase font-bold transition-colors ${isLast ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-[#F2E9DC]'}`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
