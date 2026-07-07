import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { stories } from "../../data/stories";
import StoryFeatured from "./StoryFeatured";
import StoryTestimonials from "./StoryTestimonials";
import StoryModal from "./StoryModal";

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeStory = stories[activeIndex];

  const handleChangeStory = useCallback((newIndex) => {
    setActiveIndex(newIndex);
  }, []);

  // Keyboard support on homepage (only when modal is closed)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % stories.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <section className="bg-[#090909] w-full py-12 md:py-20 relative overflow-hidden border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#EF4444] font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-bold mb-6">
              Transformation Stories
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              Real people. Real journeys.
            </h2>
          </motion.div>

          {/* Featured Teaser */}
          <StoryFeatured 
            story={activeStory} 
            onOpenModal={() => setIsModalOpen(true)} 
            activeIndex={activeIndex}
            stories={stories}
            onChangeStory={handleChangeStory}
          />

          {/* Testimonials */}
          <StoryTestimonials />

        </div>
      </section>

      {/* Modal — The Full Documentary Experience */}
      <StoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        stories={stories}
        activeIndex={activeIndex}
        onChangeStory={handleChangeStory}
      />
    </>
  );
}
