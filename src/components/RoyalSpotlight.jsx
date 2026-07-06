import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const royalBenefits = [
  "Personal Trainer Every Session",
  "Personalized Diet Plan",
  "Passive Thai Stretch Therapy",
  "Post-workout Green Tea",
  "Priority Member Support",
  "Premium Locker Access"
];

export default function RoyalSpotlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#0B0B0B] w-full py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      
      {/* Subtle radial glow behind the section */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#b89b64]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Intro & CTA */}
          <motion.div 
            className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-32 self-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.span variants={itemVariants} className="font-sans text-[0.72rem] md:text-sm font-medium tracking-[0.15em] uppercase text-[#b89b64] mb-6">
              Royal Membership
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-bone text-[40px] md:text-[56px] leading-[1.1] font-serif font-light mb-6">
              Train like you're the only member in the gym.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-[rgba(238,232,220,0.7)] text-base md:text-lg leading-relaxed font-sans mb-12 max-w-md">
              Train one-on-one with dedicated coaches, receive personalized nutrition guidance, recover faster, and enjoy a club experience designed around you.
            </motion.p>

            {/* Buttons appear last manually */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="bg-bone text-ink px-8 py-4 rounded-full font-sans text-xs md:text-sm tracking-wide uppercase font-semibold hover:bg-white transition-colors">
                Book a Consultation
              </button>
              <button className="border border-[rgba(238,232,220,0.3)] text-bone px-8 py-4 rounded-full font-sans text-xs md:text-sm tracking-wide uppercase font-semibold hover:border-bone hover:bg-[rgba(238,232,220,0.05)] transition-colors">
                Talk to a Trainer
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Image & Feature List */}
          <motion.div 
            className="w-full lg:w-7/12 flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Elegant Feature Rows */}
            <ul className="flex flex-col border-t border-[rgba(238,232,220,0.1)]">
              {royalBenefits.map((benefit, i) => (
                <motion.li 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center gap-6 py-6 md:py-8 border-b border-[rgba(238,232,220,0.1)] group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#b89b64]/30 flex items-center justify-center bg-[#b89b64]/5 group-hover:bg-[#b89b64]/10 transition-colors">
                    <Check className="w-4 h-4 text-[#b89b64]" />
                  </div>
                  <span className="text-bone font-sans text-lg md:text-xl tracking-wide font-light">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
