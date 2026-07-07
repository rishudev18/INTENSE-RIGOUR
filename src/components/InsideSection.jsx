import React from "react";
import { StaggerGroup, Reveal } from "./ui";

const experienceData = [
  {
    id: 1,
    title: "Build Strength",
    description: "Commercial-grade machines and free weights built for serious strength training.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=82",
  },
  {
    id: 2,
    title: "Train Without Limits",
    description: "Designed to keep you focused, motivated, and moving toward your goals.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: 3,
    title: "Guided By Experts",
    description: "Expert guidance tailored to your specific physical goals and progress.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: 4,
    title: "Recover Better",
    description: "Ice baths, saunas, and mobility tools. Recovery is where tomorrow's performance begins.",
    image: "https://images.unsplash.com/photo-1544367567056-51e5e1aa6612?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: 5,
    title: "Refuel & Recover",
    description: "Fresh coffee, protein drinks, and premium post-workout fuel made in-house.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1000&q=82",
  }
];

const ExperienceCard = ({ item }) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] group/card cursor-pointer 
        transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] 
        flex-1 min-w-0 min-h-[140px] md:min-h-0
        group-hover/accordion:opacity-50 hover:!opacity-100
        hover:border-white/20`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.22,.61,.36,1)] group-hover/card:scale-[1.08] opacity-80"
        />
      </div>

      {/* Overlay - gets lighter on hover */}
      <div className="absolute inset-0 bg-black/60 transition-colors duration-700 ease-[cubic-bezier(.22,.61,.36,1)] group-hover/card:bg-black/20" />
      
      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover/card:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-10">
        <h3 className="font-['Sora'] text-xl md:text-3xl text-white font-semibold tracking-tight">
          {item.title}
        </h3>
        
        {/* Description & Explore Link Container */}
        <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,.61,.36,1)] w-full">
          <div className="overflow-hidden opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-150 flex flex-col">
            <p className="font-['Manrope'] text-xs md:text-sm text-gray-300 pb-4 mt-3 whitespace-normal leading-relaxed max-w-[90%]">
              {item.description}
            </p>
            
            <div className="flex items-center gap-2 text-white font-['Manrope'] font-bold text-[10px] md:text-xs">
              <span className="uppercase tracking-[0.15em]">Explore</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover/card:translate-x-1.5 font-light text-lg leading-none mt-[-2px]">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function InsideSection() {
  return (
    <section id="facilities" className="w-full bg-[#050505] py-24 md:py-36 relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <Reveal delay={0.1} y={0}>
              <span className="text-[10px] md:text-xs font-['Manrope'] font-bold uppercase tracking-[0.25em] text-accent mb-6 block">
                The Intense Rigour Experience
              </span>
            </Reveal>
            <Reveal delay={0.3} y={20}>
              <h2 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight">
                Every Space Has a Purpose.
              </h2>
            </Reveal>
          </div>
          <div className="max-w-md pb-1">
            <Reveal delay={0.5} y={0}>
              <p className="font-['Manrope'] text-lg text-secondary leading-relaxed">
                From strength training to recovery, every environment is designed to support long-term progress.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Flex Accordion Layout */}
        <Reveal delay={0.4} y={30} className="w-full h-auto md:h-[600px] lg:h-[700px]">
          <div className="flex flex-col md:flex-row w-full h-full gap-2 md:gap-4 group/accordion">
            {experienceData.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
