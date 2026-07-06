import React from "react";
import { motion } from "framer-motion";

const TEXT_REVIEWS = [
  {
    text: "The architectural beauty of the space is only matched by the absolute rigor of the coaching. This isn't just a gym, it's an institution.",
    name: "Sarah Jenkins",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "Every detail is engineered for deep focus. No distractions, no ego—just relentless progression under world-class athletic direction.",
    name: "Michael Chen",
    role: "Member since 2022",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "I came for the aesthetics, I stayed for the results. The contrast therapy and mobility lab have completely changed my recovery game.",
    name: "Emma Croft",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "The most precise and deliberate coaching I've ever experienced. Every session is treated with absolute professionalism.",
    name: "David Lawson",
    role: "Member since 2020",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "A sanctuary for high performers. The equipment is flawless, but it's the culture of quiet discipline that keeps me coming back.",
    name: "James Monroe",
    role: "Member since 2022",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "Intense Rigour fundamentally changed how I view training. It’s not just a workout; it’s a standard of living.",
    name: "Anya Volkov",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "The conditioning protocols are brutal but perfectly calibrated. You are always pushed exactly to your limit, never past it.",
    name: "Thomas Wright",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "Finally, a training facility that respects the process. The focus on mobility and recovery is unmatched in the industry.",
    name: "Elena Rostova",
    role: "Member since 2024",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=100&q=82"
  },
  {
    text: "From the lighting to the air quality to the caliber of the coaching, everything is executed at the highest possible level.",
    name: "Richard Vance",
    role: "Member since 2020",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=100&q=82"
  },
];

const firstColumn = TEXT_REVIEWS.slice(0, 3);
const secondColumn = TEXT_REVIEWS.slice(3, 6);
const thirdColumn = TEXT_REVIEWS.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div className="p-8 rounded-[24px] border border-white/5 bg-[#111111] max-w-[320px] w-full shadow-2xl transition-colors hover:border-white/20" key={i}>
                <div className="text-white/80 font-sans text-sm leading-relaxed mb-8">"{text}"</div>
                <div className="flex items-center gap-4">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover grayscale opacity-80"
                  />
                  <div className="flex flex-col">
                    <div className="font-sans font-bold text-xs tracking-widest uppercase text-white">{name}</div>
                    <div className="font-sans text-[10px] tracking-widest uppercase text-[#F2E9DC] opacity-70 mt-1">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

export default function StoryTestimonials() {
  return (
    <div className="w-full pt-32 relative border-t border-white/10 mt-24">
      <motion.div 
        className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#F2E9DC] font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-bold mb-6">
          The Standard
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
          What our members say
        </h2>
        <p className="text-white/60 text-sm md:text-base font-sans font-light">
          The reputation of Intense Rigour is built entirely on the success and satisfaction of the athletes who train here.
        </p>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden relative">
        <TestimonialsColumn testimonials={firstColumn} duration={35} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
      </div>
    </div>
  );
}
