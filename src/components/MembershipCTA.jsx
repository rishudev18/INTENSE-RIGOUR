import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function MembershipCTA() {
  return (
    <section className="bg-[#000000] w-full min-h-[90vh] py-12 md:py-16 flex items-center text-white overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          
          {/* Left Column: Form */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-[48px] font-serif font-light leading-none mb-8 lg:mb-10 tracking-tight"
            >
              Enquire today
            </motion.h2>

            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              
              {/* Input Group */}
              <div className="flex flex-col gap-1 border-b border-white/20 pb-1.5">
                <label className="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">Name*</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-transparent border-none outline-none text-white text-sm md:text-base font-sans placeholder-white"
                />
              </div>

              <div className="flex flex-col gap-1 border-b border-white/20 pb-1.5">
                <label className="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">Email*</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none outline-none text-white text-sm md:text-base font-sans placeholder-white"
                />
              </div>

              <div className="flex flex-col gap-1 border-b border-white/20 pb-1.5">
                <label className="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">Phone Number*</label>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-transparent border-none outline-none text-white text-sm md:text-base font-sans placeholder-white"
                />
              </div>

              {/* Select Group */}
              <div className="flex flex-col gap-1 border-b border-white/20 pb-1.5 relative group">
                <label className="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">Club*</label>
                <select className="appearance-none bg-transparent border-none outline-none text-white text-sm md:text-base font-sans w-full cursor-pointer">
                  <option value="" disabled selected className="text-black">Please Select</option>
                  <option value="1" className="text-black">Gurugram Flagship</option>
                  <option value="2" className="text-black">South Delhi</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-2.5 w-4 h-4 text-white/50 pointer-events-none" />
              </div>

              <div className="flex flex-col gap-1 border-b border-white/20 pb-1.5 relative group">
                <label className="text-[9px] uppercase tracking-wider text-white/50 mb-0.5">Which other club are you interested in training at?</label>
                <select className="appearance-none bg-transparent border-none outline-none text-white text-sm md:text-base font-sans w-full cursor-pointer">
                  <option value="" disabled selected className="text-black">Please Select</option>
                  <option value="none" className="text-black">None</option>
                  <option value="1" className="text-black">Gurugram Flagship</option>
                  <option value="2" className="text-black">South Delhi</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-2.5 w-4 h-4 text-white/50 pointer-events-none" />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="w-4 h-4 border border-white/40 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:border-white transition-colors">
                  </div>
                  <span className="text-white/50 font-sans text-xs md:text-sm leading-snug">
                    Are you interested in Personal Training?
                  </span>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="w-4 h-4 border border-white/40 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:border-white transition-colors">
                  </div>
                  <span className="text-white/50 font-sans text-xs md:text-sm leading-snug max-w-[90%]">
                    I agree to receive communications from Intense Rigour.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="bg-white text-black px-10 py-3 rounded-full font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold hover:bg-white/90 hover:scale-[1.02] transition-all duration-300">
                  Send
                </button>
              </div>

            </motion.form>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12 h-[350px] lg:h-auto min-h-[500px] lg:min-h-full rounded-[16px] overflow-hidden relative"
          >
            <img 
              src="/images/yoga_meditation.png" 
              alt="Woman meditating in studio" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
