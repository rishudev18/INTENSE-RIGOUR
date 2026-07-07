import React from "react";
import { Reveal, Button } from "./ui";

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
          <Reveal>
            <h2 className="font-heading text-[48px] md:text-[64px] lg:text-[80px] leading-tight text-primary mb-8 tracking-wide drop-shadow-lg">
              Become a member
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = "/membership"}
            >
              Find Out More
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
