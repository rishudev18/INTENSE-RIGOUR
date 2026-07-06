import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much is an Intense Rigour Membership?",
    answer: "Membership pricing varies based on the tier and duration you select. Please refer to our membership plans or contact our team for detailed pricing."
  },
  {
    question: "Can I freeze or extend my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or travel. A small admin fee may apply."
  },
  {
    question: "How do guest passes work?",
    answer: "Standard and Royal memberships include complimentary guest passes. You can bring a friend by registering them through the member app 24 hours in advance."
  },
  {
    question: "Can I change my home club?",
    answer: "Yes, you can transfer your home club designation at any time after your first 3 months, subject to availability at the new location."
  },
  {
    question: "Can I upgrade my membership?",
    answer: "Absolutely. You can upgrade your membership tier at any time. The difference in fees will be pro-rated for the remainder of your billing cycle."
  },
  {
    question: "Can I cancel a class without a penalty?",
    answer: "Classes can be cancelled without penalty up to 12 hours before the start time. Late cancellations may incur a small fee."
  },
  {
    question: "What is the notice, duration and cost of freezing my membership?",
    answer: "We require a 14-day notice to freeze your membership. Freezes can last between 1 to 3 months, and incur a ₹500 monthly admin fee."
  }
];

export default function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-24 md:py-32 text-black">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Title */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light leading-tight tracking-tight">
            Membership FAQ's
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:w-2/3 w-full border-t border-black/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div 
                key={i} 
                className="border-b border-black/20"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group text-left outline-none"
                >
                  <span className="font-sans font-medium text-lg md:text-xl pr-8 transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* Circle Plus/Minus Icon */}
                  <div className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center transition-all duration-300 group-hover:border-black group-hover:bg-black/5">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-black/70 group-hover:text-black transition-colors" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 text-black/70 group-hover:text-black transition-colors" strokeWidth={1.5} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-black/70 font-sans text-base md:text-lg leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
