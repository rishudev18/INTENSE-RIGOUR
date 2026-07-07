import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ArrowRight, ArrowLeft, MapPin, CheckCircle2, MessageCircle, Dumbbell, Star, Target } from "lucide-react";

export default function Contact() {
  const [step, setStep] = useState(1);
  
  const [selectedMembership, setSelectedMembership] = useState("");
  const [selectedGoals, setSelectedGoals] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-ink text-bone flex flex-col relative">
      <Navbar />
      
      {/* Top Split Section */}
      <section className="flex-1 flex items-center pt-28 pb-16 md:pt-32 md:pb-20 relative z-10">
        
        {/* Subtle Background Image for left balance */}
        <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/95 to-ink z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80" 
            alt="Gym Background" 
            className="w-full h-full object-cover filter grayscale opacity-[0.03]"
          />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Copy & Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col w-full"
          >
            <motion.span variants={fadeUp} className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-bone/60 mb-4">
              Connect with us
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[72px] font-serif font-light leading-[1.05] mb-8 max-w-2xl">
              Start Your <br className="hidden md:block"/>
              <span className="italic font-light">Transformation.</span>
            </motion.h1>

            {/* Trust Badges - Made slightly larger and with distinct icons */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-8 pb-8 border-b border-white/5">
              <div className="flex items-center gap-3 text-bone/90">
                <CheckCircle2 className="w-5 h-5 text-[#b89b64]" />
                <span className="font-sans text-sm md:text-base font-medium">Free Trial Session</span>
              </div>
              <div className="flex items-center gap-3 text-bone/90">
                <Dumbbell className="w-5 h-5 text-[#b89b64]" />
                <span className="font-sans text-sm md:text-base font-medium">Certified Trainers</span>
              </div>
              <div className="flex items-center gap-3 text-bone/90">
                <Star className="w-5 h-5 text-[#b89b64]" />
                <span className="font-sans text-sm md:text-base font-medium">500+ Members</span>
              </div>
              <div className="flex items-center gap-3 text-bone/90">
                <Target className="w-5 h-5 text-[#b89b64]" />
                <span className="font-sans text-sm md:text-base font-medium">Personalized Programs</span>
              </div>
            </motion.div>

            {/* Left Column Filler - Rating */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 w-max bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
              <div className="flex flex-col">
                <div className="flex text-[#b89b64] gap-1 mb-1">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-sans text-xs text-bone/80 uppercase tracking-widest font-semibold mt-1">Rated 4.9/5 by 300+ Athletes</span>
              </div>
            </motion.div>
            
            {/* Contact Pills */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 max-w-sm">
              <motion.a variants={fadeUp} href="tel:+919876543210" className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-2xl border border-transparent hover:border-[#b89b64]/50 hover:bg-[#b89b64]/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(184,155,100,0.1)]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b89b64]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#b89b64] group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-bone/50 group-hover:text-[#b89b64] transition-colors">Phone</span>
                  <span className="font-sans text-sm md:text-base font-medium">+91 98765 43210</span>
                </div>
              </motion.a>
              
              <motion.a variants={fadeUp} href="mailto:join@intenserigour.com" className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-2xl border border-transparent hover:border-[#b89b64]/50 hover:bg-[#b89b64]/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(184,155,100,0.1)]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b89b64]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#b89b64] group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-bone/50 group-hover:text-[#b89b64] transition-colors">Email</span>
                  <span className="font-sans text-sm md:text-base font-medium">join@intenserigour.com</span>
                </div>
              </motion.a>

              <motion.div variants={fadeUp} className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-2xl border border-transparent hover:border-[#b89b64]/50 hover:bg-[#b89b64]/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(184,155,100,0.1)]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b89b64]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#b89b64] group-hover:animate-bounce transition-transform duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-bone/50 group-hover:text-[#b89b64] transition-colors">Location</span>
                  <span className="font-sans text-sm md:text-base font-medium leading-snug">Sector 54<br/>Golf Course Road<br/>Gurugram</span>
                </div>
              </motion.div>

              <motion.a variants={fadeUp} href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 px-5 py-4 rounded-2xl border border-transparent hover:border-[#b89b64]/50 hover:bg-[#b89b64]/5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(184,155,100,0.1)]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b89b64]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#b89b64] group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-bone/50 group-hover:text-[#b89b64] transition-colors">Social</span>
                  <span className="font-sans text-sm md:text-base font-medium relative overflow-hidden">
                    @intenserigour
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b89b64] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:w-1/2 w-full sticky top-28"
          >
            <div className="bg-[#0f0f0f] border border-white/5 rounded-[24px] p-6 sm:p-10 w-full shadow-2xl relative overflow-hidden">
              
              {/* Progress Indicator */}
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] text-[#b89b64] font-bold uppercase tracking-widest">
                    {step === 1 ? "Step 1 of 2" : "Step 2 of 2"}
                  </span>
                  <span className="font-sans text-[10px] text-bone/50 font-bold tracking-widest">
                    {step === 1 ? "50%" : "100%"}
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#b89b64] rounded-full"
                    initial={{ width: "50%" }}
                    animate={{ width: step === 1 ? "50%" : "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight mb-2">
                      Tell us a little about yourself.
                    </h2>
                    <p className="font-sans text-[12px] md:text-sm text-bone/60 mb-8 max-w-md">
                      We'll recommend the best membership based on your goals. We typically respond within 30 minutes.
                    </p>

                    <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5 group">
                          <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">Full Name *</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe" 
                            className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0" 
                          />
                        </div>
                        <div className="flex flex-col gap-1.5 group">
                          <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">Email *</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5 group">
                          <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">Phone Number</label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-sm text-bone/50">+91</span>
                            <input 
                              type="tel" 
                              placeholder="98765 43210" 
                              className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0" 
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5 group">
                          <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">Primary Focus</label>
                          <input 
                            type="text" 
                            placeholder="Weight Loss, Strength..." 
                            className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 mb-2">
                        <div className="flex flex-col gap-1.5 group">
                          <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">How did you hear about us?</label>
                          <input 
                            type="text" 
                            placeholder="Instagram, Friend, Google Search..." 
                            className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0" 
                          />
                        </div>
                      </div>

                      <button type="submit" className="w-full bg-[#b89b64] text-[#050505] font-sans font-bold text-base font-semibold tracking-normal py-4 rounded-xl flex items-center justify-between px-8 hover:bg-[#d4be8a] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(184,155,100,0.3)] transition-all duration-200 group">
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight mb-2">
                      Almost there
                    </h2>
                    <p className="font-sans text-[12px] md:text-sm text-bone/60 mb-8 max-w-md">
                      Help us understand your current fitness level so we can prepare the perfect plan for you.
                    </p>

                    <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Form Submitted!"); }}>
                      
                      {/* Membership Type */}
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70">What's your preferred membership type?</label>
                        <div className="flex flex-wrap gap-2">
                          {['Standard', 'Premium', 'Personal Training', 'Not Sure'].map(type => (
                            <button 
                              type="button" 
                              key={type}
                              onClick={() => setSelectedMembership(type)}
                              className={`border rounded-lg px-4 py-2 text-xs transition-colors text-bone/90 ${
                                selectedMembership === type 
                                ? 'bg-white/10 border-[#b89b64] text-[#b89b64] shadow-[0_0_10px_rgba(184,155,100,0.1)]' 
                                : 'bg-[#1a1a1a] border-white/5 hover:bg-white/5 hover:border-white/20'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Primary Goals */}
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70">Select your specific goals</label>
                        <div className="flex flex-wrap gap-2">
                          {['Weight Loss', 'Muscle Gain', 'Endurance', 'Flexibility', 'Sports Prep', 'General Fitness'].map(goal => (
                            <button 
                              type="button" 
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className={`border rounded-lg px-4 py-2 text-xs transition-colors text-bone/90 ${
                                selectedGoals.includes(goal)
                                ? 'bg-white/10 border-[#b89b64] text-[#b89b64] shadow-[0_0_10px_rgba(184,155,100,0.1)]' 
                                : 'bg-[#1a1a1a] border-white/5 hover:bg-white/5 hover:border-white/20'
                              }`}
                            >
                              {goal}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="flex flex-col gap-1.5 group">
                        <label className="text-[10px] uppercase tracking-wider font-sans text-bone/70 group-focus-within:text-[#b89b64] transition-colors">Tell us about your fitness journey*</label>
                        <textarea 
                          rows={3}
                          required
                          placeholder="Briefly explain your background, any past injuries, and what motivates you..."
                          className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 text-sm outline-none focus:border-[#b89b64] focus:shadow-[0_0_15px_rgba(184,155,100,0.15)] focus:bg-[#222] transition-all duration-250 placeholder-bone/30 focus:placeholder-opacity-0 resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)} 
                          className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors flex-shrink-0 group"
                        >
                          <ArrowLeft className="w-5 h-5 text-bone/70 group-hover:text-bone group-hover:-translate-x-1 transition-all" />
                        </button>
                        <button type="submit" className="flex-1 bg-[#b89b64] text-[#050505] font-sans font-bold text-base font-semibold tracking-normal py-4 rounded-xl flex items-center justify-center hover:bg-[#d4be8a] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(184,155,100,0.3)] transition-all duration-200">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-3">
                <p className="font-sans text-[11px] text-bone/50 uppercase tracking-widest font-bold">Need an instant response?</p>
                <a href="#" className="flex items-center gap-2 text-[#25D366] hover:text-[#20b852] transition-colors font-sans text-base font-semibold font-bold group">
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
      
      {/* Visit Our Gym Map Section */}
      <section className="bg-[#090909] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 border-t border-white/5 pointer-events-none" />
        
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 md:gap-8 mb-20 md:mb-28 opacity-50"
          >
            <div className="h-px bg-white/20 w-16 md:w-32 lg:w-64"></div>
            <h3 className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#b89b64] whitespace-nowrap font-bold">Visit Us</h3>
            <div className="h-px bg-white/20 w-16 md:w-32 lg:w-64"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-4 text-bone">
              Find Our Gym
            </h2>
            <p className="font-sans text-bone/60 max-w-xl text-sm md:text-base">
              Located in the heart of Gurugram. Drop by to experience the space, meet the coaching team, and see how we train.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Map Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112151.78912384918!2d76.95317924335938!3d28.42295745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
            </motion.div>

            {/* Info Area */}
            <div className="lg:w-1/3 flex flex-col gap-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-sans text-[10px] uppercase tracking-widest text-[#b89b64] mb-3 font-bold">Address</h3>
                <p className="font-sans text-bone/80 text-sm md:text-base leading-relaxed">
                  Intense Rigour<br/>
                  Sector 54, Golf Course Road<br/>
                  Gurugram, Haryana 122002<br/>
                  India
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-sans text-[10px] uppercase tracking-widest text-[#b89b64] mb-3 font-bold">Parking</h3>
                <p className="font-sans text-bone/80 text-sm md:text-base leading-relaxed">
                  Complimentary valet parking available for members. Secure basement parking also accessible via the main entrance.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-sans text-[10px] uppercase tracking-widest text-[#b89b64] mb-4 font-bold">Opening Hours</h3>
                <div className="flex flex-col gap-3 font-sans text-sm md:text-base">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-bone/60">Monday - Friday</span>
                    <span className="text-bone/90 font-medium">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-bone/60">Saturday</span>
                    <span className="text-bone/90 font-medium">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 pt-1">
                    <span className="text-bone/60">Sunday</span>
                    <span className="text-[#b89b64] font-bold uppercase tracking-widest text-[10px]">Closed</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
