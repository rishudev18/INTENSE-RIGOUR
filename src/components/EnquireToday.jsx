import React from "react";
import { ChevronDown } from "lucide-react";

export default function EnquireToday() {
  return (
    <section className="w-full bg-[#050505] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Form */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 font-light">Enquire today</h2>
          
          <form className="flex flex-col gap-8 w-full max-w-lg">
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Name*</label>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-white outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Email*</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-white outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <label className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Phone Number*</label>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder:text-white outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2 relative group cursor-pointer">
              <label className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Club*</label>
              <div className="relative border-b border-white/20 pb-2 flex justify-between items-center group-hover:border-white transition-colors">
                <span className="text-sm text-white">Please Select</span>
                <ChevronDown className="w-4 h-4 text-white/50" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 relative group cursor-pointer">
              <label className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Which other club are you interested in training at?</label>
              <div className="relative border-b border-white/20 pb-2 flex justify-between items-center group-hover:border-white transition-colors">
                <span className="text-sm text-white">Please Select</span>
                <ChevronDown className="w-4 h-4 text-white/50" />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <label className="flex items-center gap-4 cursor-pointer group">
                <div className="w-4 h-4 border border-white/40 flex items-center justify-center group-hover:border-white transition-colors shrink-0">
                  {/* Empty checkbox visually */}
                </div>
                <span className="text-sm text-white/70">Are you interested in Personal Training?</span>
              </label>
              
              <label className="flex items-center gap-4 cursor-pointer group">
                <div className="w-4 h-4 border border-white/40 flex items-center justify-center group-hover:border-white transition-colors shrink-0">
                  {/* Empty checkbox visually */}
                </div>
                <span className="text-sm text-white/70">I agree to receive communications from Intense Rigour.</span>
              </label>
            </div>
            
            <div className="mt-8">
              <button 
                type="button" 
                className="bg-white text-black px-10 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
              >
                Send
              </button>
            </div>
            
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full relative">
          <div className="w-full aspect-square md:aspect-[4/5] lg:aspect-square xl:aspect-[4/3] rounded-[24px] overflow-hidden">
            <img 
              src="/images/enquire_bg.png" 
              alt="Meditation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
