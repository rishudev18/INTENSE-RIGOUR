import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRAINERS = [
  { 
    id: 1, 
    name: "Marcus",
    role: "Head of Strength",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=82",
    rotation: -4,
    yOffset: -5,
    yearsExperience: "12+ Years",
    specialties: "Olympic Lifting, Performance Strategy",
    quote: "Strength isn't built in a day. It's built one consistent session at a time.",
    description: "Marcus is a veteran performance strategist with a decade of elite experience in the fitness industry. As the Head of Strength at Intense Rigour, he leads and conceptualizes all physical programming, shaping the athletic identity and performance direction of our members.\n\nOver his distinguished 10-year career, Marcus has trained some of the leading national athletes and competitors. This rich background brings a massive wealth of physiological expertise to Intense Rigour."
  },
  { 
    id: 2, 
    name: "Elena",
    role: "Head of Mobility",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=82",
    rotation: 2,
    yOffset: 8,
    yearsExperience: "8 Years",
    specialties: "Clinical Biomechanics, Active Release",
    quote: "Movement is medicine. Optimal mobility is the foundation of peak performance and longevity.",
    description: "Elena specializes in the art of human movement and recovery. Her approach to mobility transcends simple stretching—she focuses on joint integrity, fascial release, and neuromuscular control to keep our members moving fluidly and pain-free.\n\nHer background in clinical biomechanics allows her to diagnose movement compensations instantly. Whether you are an elite athlete recovering from a grueling season or an executive combating the stiffness of a desk-bound lifestyle, Elena crafts tailored recovery protocols."
  },
  { 
    id: 3, 
    name: "David",
    role: "Conditioning Specialist",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=82",
    rotation: -2,
    yOffset: 12,
    yearsExperience: "10 Years",
    specialties: "Aerobic Capacity, Anaerobic Thresholds",
    quote: "Build the engine. True endurance requires pushing past perceived psychological limits.",
    description: "David is the architect of our most demanding cardiovascular protocols. He builds engines. Combining high-intensity interval frameworks with steady-state endurance techniques, he pushes the boundaries of aerobic and anaerobic thresholds.\n\nWith a background in competitive endurance sports, David understands the psychological resilience required to push past perceived limits."
  },
  { 
    id: 4, 
    name: "Anya",
    role: "Performance Coach",
    image: "https://images.unsplash.com/photo-1567598508481-65985588e295?auto=format&fit=crop&w=600&q=82",
    rotation: 4,
    yOffset: -2,
    yearsExperience: "6 Years",
    specialties: "Plyometrics, Explosive Power",
    quote: "Power without control is wasted. We bridge the gap between raw strength and functional speed.",
    description: "Anya is the bridge between raw power and functional application. She focuses on translating gym strength into real-world athleticism, utilizing dynamic movements, plyometrics, and agility drills to build well-rounded, explosive athletes.\n\nHer infectious energy is matched only by her technical exactness. Anya ensures that every rep is executed with perfect form, preventing injury while maximizing athletic output."
  },
  { 
    id: 5, 
    name: "Sarah",
    role: "Athletic Director",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=82",
    rotation: -3,
    yOffset: 5,
    yearsExperience: "15 Years",
    specialties: "Collegiate Athletics, Program Design",
    quote: "Marginal gains compound into massive results. Train with the mindset of a professional.",
    description: "Sarah brings a collegiate athletics rigor to the premium gym environment. Having coached at the Division 1 level, she understands the micro-adjustments that separate good athletes from great ones.\n\nShe oversees the quality control of all coaching at Intense Rigour, ensuring our standards remain world-class. Her personal training philosophy emphasizes absolute discipline and structural balance."
  }
];

function TrainerModal({ trainer, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative w-full h-[90vh] md:h-[80vh] max-w-[1100px] flex flex-col md:flex-row bg-[#111] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Modal Left: Portrait Image */}
        <div className="w-full md:w-[45%] h-[40%] md:h-full relative overflow-hidden bg-black shrink-0">
          <img 
            src={trainer.image} 
            alt={trainer.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <h3 className="text-white text-4xl md:text-6xl font-serif leading-none tracking-tight">
              {trainer.name}
            </h3>
            <p className="text-white/80 font-sans text-sm md:text-base font-medium mt-2">
              {trainer.role}
            </p>
          </div>
        </div>

        {/* Modal Right: Details */}
        <div className="w-full md:w-[55%] h-[60%] md:h-full overflow-y-auto p-6 md:p-12 flex flex-col relative text-[#d1d1d1]">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all"
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="mt-4 md:mt-0 flex-grow">
            
            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/10">
              <div>
                <h4 className="font-sans text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/40 mb-2">
                  Experience
                </h4>
                <p className="font-sans text-sm md:text-base font-semibold text-white">
                  {trainer.yearsExperience}
                </p>
              </div>
              <div>
                <h4 className="font-sans text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/40 mb-2">
                  Specializations
                </h4>
                <p className="font-sans text-sm md:text-base font-semibold text-white">
                  {trainer.specialties}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="mb-10">
              <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
                "{trainer.quote}"
              </p>
            </div>

            {/* Full Bio */}
            <div className="space-y-6">
              <h4 className="font-sans text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/40 mb-2">
                About
              </h4>
              {trainer.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="font-sans text-sm md:text-base leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* CTA Area */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/10 shrink-0 gap-6">
            <div className="flex items-center gap-4 text-white/30 font-sans text-[0.6rem] font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-white/10"></span>
              INTENSE RIGOUR
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wide uppercase hover:bg-white/90 hover:scale-[1.02] transition-all w-full md:w-auto">
              Book a Session
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TrainersSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  // Stagger variants for the container
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      } 
    },
  };

  return (
    <section className="bg-[#f8f8f8] w-full flex flex-col justify-center py-16 md:py-20 overflow-hidden relative" id="trainers">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 w-full">
        
        {/* Typography / Header - Adjusted size and spacing */}
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-10">
          <motion.h2 
            className="text-[#111] text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-none mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            onAnimationComplete={() => setAnimationsEnabled(true)}
          >
            The Coaches Behind <br className="hidden md:block" /> Your Progress
          </motion.h2>
          
          <motion.p 
            className="text-[#666] text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The dedicated team bringing your fitness goals to life.
          </motion.p>
        </div>

        {/* Desktop / Tablet Overlapping Row */}
        <motion.div 
          className="hidden md:flex justify-center items-center h-[280px] lg:h-[360px] xl:h-[420px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TRAINERS.map((trainer, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            // Adjust z-index so the hovered card is always on top.
            const naturalZ = index;
            const zIndex = isHovered ? 50 : naturalZ;

            return (
              <motion.div
                key={trainer.id}
                variants={itemVariants}
                onClick={() => setSelectedTrainer(trainer)}
                // Reduced the negative margins to give the cards more breathing room
                className={`relative cursor-pointer rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shrink-0 w-[200px] h-[250px] lg:w-[260px] lg:h-[325px] xl:w-[300px] xl:h-[375px] ${index === 0 ? '' : '-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-10'}`}
                style={{
                  zIndex,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.03)", // Soft shadow and subtle border
                }}
              >
                <motion.div
                  className="relative w-full h-full bg-white"
                  animate={animationsEnabled ? {
                    rotate: isHovered ? 0 : trainer.rotation,
                    y: isHovered ? trainer.yOffset - 15 : trainer.yOffset, // Slight lift on hover
                    scale: isHovered ? 1.03 : 1, // Subtle zoom
                  } : {
                    rotate: trainer.rotation,
                    y: trainer.yOffset,
                    scale: 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  onHoverStart={() => animationsEnabled && setHoveredIndex(index)}
                  onHoverEnd={() => animationsEnabled && setHoveredIndex(null)}
                >
                  {/* Grayscale Transition Layer */}
                  <motion.div
                    className="w-full h-full relative overflow-hidden"
                    animate={animationsEnabled ? {
                      // Multi-step grayscale transition: 100% -> 80% -> 40% -> 0%
                      filter: isHovered 
                        ? ["grayscale(100%) brightness(0.9)", "grayscale(80%) brightness(0.95)", "grayscale(40%) brightness(1)", "grayscale(0%) brightness(1)"]
                        : (isAnyHovered ? "grayscale(100%) brightness(0.5)" : "grayscale(100%) brightness(0.9)"),
                    } : {
                      filter: "grayscale(100%) brightness(0.9)"
                    }}
                    transition={{ 
                      duration: isHovered ? 0.45 : 0.3, 
                      ease: isHovered ? "linear" : "easeInOut"
                    }}
                  >
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Name and Role Reveal on Hover */}
                  <AnimatePresence>
                    {isHovered && animationsEnabled && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full p-6 lg:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h3 
                          className="text-white font-serif text-3xl lg:text-4xl leading-tight mb-1"
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 10, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          {trainer.name}
                        </motion.h3>
                        <motion.p 
                          className="text-white/80 font-sans text-[0.65rem] lg:text-xs font-semibold tracking-widest uppercase"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {trainer.role}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Scrolling Strip */}
        <div className="flex md:hidden overflow-x-auto pb-12 pt-8 -mx-5 px-5 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-6">
            {TRAINERS.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                onClick={() => setSelectedTrainer(trainer)}
                className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shrink-0 snap-center border border-black/5"
                style={{
                  width: "280px",
                  height: "380px",
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <p className="text-white font-serif text-3xl leading-tight mb-2">{trainer.name}</p>
                    <p className="text-white/80 font-sans text-[0.65rem] tracking-widest uppercase font-semibold">{trainer.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Trainers CTA */}
        <motion.div 
          className="mt-12 md:mt-16 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#666] font-sans text-xs md:text-sm mb-6">
            Meet all 20+ coaches
          </p>
          <a 
            href="/trainers" 
            className="group flex items-center gap-3 bg-white border border-[#111]/10 text-[#111] px-8 py-4 rounded-full font-sans text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm hover:shadow-md hover:bg-[#111] hover:text-white transition-all duration-300"
          >
            <span>View All Trainers</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 font-light">→</span>
          </a>
        </motion.div>

      </div>
      
      {/* Profile Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <TrainerModal 
            trainer={selectedTrainer} 
            onClose={() => setSelectedTrainer(null)} 
          />
        )}
      </AnimatePresence>
      
    </section>
  );
}
