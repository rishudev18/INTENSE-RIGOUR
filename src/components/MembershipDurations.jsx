import React from "react";
import { motion } from "framer-motion";

const durationPlans = [
  {
    name: "Basic",
    description: "Flexible commitments for your fitness foundation.",
    buttonText: "Choose Basic",
    pricing: [
      { duration: "3 Months", price: "₹7,000" },
      { duration: "6 Months", price: "₹10,000" },
      { duration: "12 Months", price: "₹14,000" }
    ]
  },
  {
    name: "Standard",
    description: "Expanded benefits with flexible terms.",
    buttonText: "Choose Standard",
    pricing: [
      { duration: "3 Months", price: "₹10,000" },
      { duration: "6 Months", price: "₹15,000" },
      { duration: "12 Months", price: "₹20,000" }
    ]
  }
];

export default function MembershipDurations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="bg-[#0B0B0B] w-full py-20 md:py-32">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Intro */}
        <motion.div 
          className="flex flex-col text-left md:text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="font-sans text-[0.72rem] md:text-sm font-medium tracking-[0.15em] uppercase text-[#b89b64] mb-4 md:mx-auto">
            Membership Details
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-bone text-[40px] md:text-[56px] leading-[1.1] font-serif font-light mb-4 md:mx-auto">
            Find the option that fits your schedule.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[rgba(238,232,220,0.6)] text-base md:text-lg font-sans max-w-lg md:mx-auto">
            Members can choose a duration that best suits their goals. Longer commitments offer enhanced value.
          </motion.p>
        </motion.div>

        {/* Stacked Pricing Blocks */}
        <motion.div 
          className="flex flex-col gap-20 md:gap-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          {durationPlans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants} className="flex flex-col">
              
              {/* Plan Header */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-3xl md:text-5xl font-serif font-light text-bone mb-3">
                  {plan.name}
                </h3>
                <p className="text-[rgba(238,232,220,0.5)] font-sans text-sm md:text-base">
                  {plan.description}
                </p>
              </div>

              {/* Pricing Rows */}
              <ul className="flex flex-col mb-10 border-t border-[rgba(238,232,220,0.1)]">
                {plan.pricing.map((tier, i) => (
                  <li key={i} className="group relative flex items-center justify-between py-6 md:py-8 border-b border-[rgba(238,232,220,0.1)] hover:border-[rgba(238,232,220,0.3)] transition-colors duration-500 overflow-hidden cursor-pointer">
                    
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <span className="relative z-10 text-[rgba(238,232,220,0.7)] font-sans text-lg md:text-2xl tracking-wide group-hover:text-bone transition-colors duration-500 md:pl-4">
                      {tier.duration}
                    </span>
                    
                    {/* Animated Price */}
                    <span className="relative z-10 text-bone font-sans font-medium text-2xl md:text-4xl transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-2 md:pr-4">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div>
                <button className="bg-bone text-ink px-10 py-5 rounded-full font-sans text-sm tracking-wide uppercase font-semibold hover:bg-white transition-colors inline-flex items-center gap-4 group/btn">
                  <span>{plan.buttonText}</span>
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
