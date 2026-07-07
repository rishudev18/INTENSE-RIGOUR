import React, { useRef, useState, useEffect } from "react";
import TrainingCard from "./TrainingCard";
import { trainingData } from "../data/trainingData";

export default function TrainingSection() {
  const scrollRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  // Check if we are on a screen size that uses the horizontal slider
  useEffect(() => {
    const checkMobile = () => setShowControls(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild;
      if (card) {
        // Scroll by the width of one card plus gap
        scrollRef.current.scrollBy({ left: card.offsetWidth + 16, behavior: "smooth" });
      }
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild;
      if (card) {
        scrollRef.current.scrollBy({ left: -(card.offsetWidth + 16), behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-[#090a09] w-full py-[120px] lg:py-[160px] training-section relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24 relative">

          {/* Section Header */}
          <div className="max-w-4xl relative z-10 flex flex-col items-center">
            <span className="text-[#ef4444] uppercase tracking-[0.2em] text-[0.65rem] md:text-xs font-bold mb-4 md:mb-6 block">
              THE INTENSE RIGOUR EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans text-white leading-[1.05] font-bold mb-5 md:mb-8 tracking-tight">
              Every space is built<br className="hidden md:block"/> with one purpose:
            </h2>
            <p className="text-[#f0eadf]/60 text-base md:text-lg lg:text-xl font-['Satoshi'] max-w-2xl mx-auto leading-relaxed">
              to help you train harder, recover smarter,<br className="hidden md:block" /> and make consistent progress.
            </p>
          </div>

          {/* Mobile Swipe Buttons (centered below text on mobile) */}
          {showControls && (
            <div className="flex items-center gap-3 mt-8 relative z-10">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[rgba(240,234,223,0.2)] text-[#f0eadf] hover:bg-white hover:text-[#090a09] transition-colors"
                aria-label="Previous card"
              >
                ←
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[rgba(240,234,223,0.2)] text-[#f0eadf] hover:bg-white hover:text-[#090a09] transition-colors"
                aria-label="Next card"
              >
                →
              </button>
            </div>
          )}
        </div>
        
        {/* The grid turns into a flex horizontal scroll container on mobile via CSS */}
        <div 
          ref={scrollRef} 
          className="training-grid"
        >
          {trainingData.map((item, index) => (
            <TrainingCard key={index} training={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
