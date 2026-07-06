import React from "react";

export default function BecomeMemberCTA() {
  return (
    <section className="w-full relative h-[90vh] md:h-[95vh] flex items-center justify-center p-4 md:p-6 bg-[#090a09]">
      <div className="relative w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pilates_reformer.png" 
            alt="Pilates reformer" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-tight text-white mb-8 tracking-wide drop-shadow-lg">
            Become a member
          </h2>
          
          <a 
            href="/membership" 
            className="bg-white text-black px-8 py-3.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-xl inline-block"
          >
            Find Out More
          </a>
        </div>
      </div>
    </section>
  );
}
