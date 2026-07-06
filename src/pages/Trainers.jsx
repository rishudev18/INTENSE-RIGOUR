import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, X } from "lucide-react";
import EnquireToday from "../components/EnquireToday";
import { motion, AnimatePresence } from "framer-motion";

const BIO_TEMPLATES = [
  {
    short: "Strives for excellence and focuses on clients reaching their true potential.",
    long: "Having been in the fitness industry all their life, they have had the chance to educate themselves in several modalities such as Strength & Conditioning, Bodybuilding, Performance Training and CrossFit and wholeheartedly believes there is no ‘one size fits all’ approach to leading a healthy lifestyle. With a particular interest in Nutrition and Psychology, they endeavour to provide a 4 pillar approach with all their clients, supporting them to find balance with exercise, nutrition, mindset & recovery.",
    expertise: ["Nutrition", "Functional Training", "Pre & Post Menopause"],
    qualifications: ["Bsc (Hons) Nutrition", "Certified Functional Strength Coach (CFSC)", "Resistance Training Specialist (RTS)", "Foundation"]
  },
  {
    short: "Specializes in high-performance conditioning and complete lifestyle transformations.",
    long: "Having trained elite athletes and everyday professionals alike, they bridge the gap between conventional gym training and elite performance. They believe that true transformation happens when you build sustainable habits and push past your perceived limits with precision and discipline. For the last 5 years, they have specialized in pushing clients beyond their mental barriers to achieve lasting physical changes.",
    expertise: ["Athletic Conditioning", "Metabolic Conditioning", "Body Recomposition"],
    qualifications: ["NSCA Certified Personal Trainer", "USA Weightlifting L1", "Precision Nutrition L1"]
  },
  {
    short: "Focuses on mobility, injury prevention, and holistic functional movement.",
    long: "Taking a holistic view of human performance, they integrate cutting-edge nutritional science with advanced mobility and recovery techniques. They ensure members are fueling and moving optimally for both performance and longevity. Their approach is built on the foundation that longevity in fitness is the ultimate goal, and that requires moving well before moving heavy.",
    expertise: ["Mobility & Flexibility", "Injury Rehabilitation", "Breathwork & Recovery"],
    qualifications: ["FRC Mobility Specialist", "RYT-200 Yoga Instructor", "Trigger Point Therapy Certified"]
  },
  {
    short: "Expert in hypertrophy and strength mechanics for dramatic body recomposition.",
    long: "Bringing years of high-performance coaching to the floor, their approach relies heavily on progressive overload and biomechanical optimization. They have successfully prepared numerous clients for meets and dramatic transformations utilizing highly structured programming. They believe in the science of lifting and track every metric to ensure continuous progress.",
    expertise: ["Powerlifting", "Hypertrophy", "Biomechanics Optimization"],
    qualifications: ["CSCS (Certified Strength and Conditioning Specialist)", "ISSA Certified Fitness Trainer", "Advanced Biomechanics Certification"]
  },
  {
    short: "Passionate about building unshakeable confidence through weight training.",
    long: "They understand that the hardest part of fitness isn't just the hour in the gym—it's the other 23 hours of the day. By focusing on sustainable habit formation and metabolic conditioning, they have helped hundreds of individuals completely overhaul their physiques and mindsets. Their sessions are designed to be intense, educational, and ultimately empowering.",
    expertise: ["Fat Loss", "Habit & Mindset Building", "Kettlebell Training"],
    qualifications: ["ACE Certified Personal Trainer", "Behavior Change Specialist", "Kettlebell Athletics Level 2"]
  }
];

const RAW_TRAINERS = [
  { id: 1, name: "Ashish Verma", tag: "STRENGTH", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Rahul Sharma", tag: "TRANSFORMATION", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Kunal Malhotra", tag: "PERFORMANCE", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Nisha Rathore", tag: "NUTRITION", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Vikram Singh", tag: "MOBILITY", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Pooja Das", tag: "YOGA", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Arjun Reddy", tag: "OLYMPIC LIFTING", image: "https://images.unsplash.com/photo-1534368959876-2651c874f568?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Meera Kapoor", tag: "ENDURANCE", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Aman Gupta", tag: "CALISTHENICS", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Sarah Jones", tag: "PILATES", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "David Chen", tag: "BOXING", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f4?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Elena Rostova", tag: "HYPERTROPHY", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Marcus Thorne", tag: "STRENGTH", image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Priya Patel", tag: "WELLNESS", image: "https://images.unsplash.com/photo-1526506114869-c09772c91834?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Leo Silva", tag: "JIU JITSU", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80" },
  { id: 16, name: "Emma Watson", tag: "AEROBICS", image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80" },
  { id: 17, name: "Chris Evans", tag: "CROSSFIT", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
  { id: 18, name: "Jessica Alba", tag: "FLEXIBILITY", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
  { id: 19, name: "Tom Hardy", tag: "MMA", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" },
  { id: 20, name: "Zendaya", tag: "DANCE FITNESS", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" }
];

const TRAINERS = RAW_TRAINERS.map((t, i) => ({
  ...t,
  shortBio: BIO_TEMPLATES[i % 5].short,
  longBio: BIO_TEMPLATES[i % 5].long,
  expertise: BIO_TEMPLATES[i % 5].expertise,
  qualifications: BIO_TEMPLATES[i % 5].qualifications
}));

function TrainerDrawer({ trainer, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* Blurred Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
      />
      
      {/* Sliding Drawer */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:w-[500px] lg:w-[600px] h-full bg-white flex flex-col z-10 shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Half: Image Area (Fixed at top of drawer) */}
        <div className="h-[40%] md:h-[45%] relative w-full bg-black shrink-0">
          <img 
            src={trainer.image} 
            alt={trainer.name}
            className="w-full h-full object-cover filter grayscale contrast-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end gap-4">
             <h2 className="text-3xl md:text-5xl text-white font-serif">{trainer.name}</h2>
             <button className="bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-5 py-3 md:px-6 md:py-3.5 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap shrink-0">
               Get In Touch
             </button>
          </div>
        </div>

        {/* Bottom Half: Scrollable Text Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 text-black bg-white">
           
           <p className="font-serif text-[15px] md:text-base lg:text-lg leading-[1.8] text-[#333] mb-12">
             {trainer.longBio}
           </p>

           {/* Expertise Section */}
           <div className="border-t border-gray-200 py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
             <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black">
               Expertise
             </h4>
             <div className="text-[13px] md:text-sm text-gray-500 leading-loose flex flex-col gap-1">
               {trainer.expertise.map((item, idx) => (
                 <span key={idx}>{item}</span>
               ))}
             </div>
           </div>

           {/* Qualifications Section */}
           <div className="border-t border-gray-200 py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
             <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black">
               Qualifications
             </h4>
             <div className="text-[13px] md:text-sm text-gray-500 leading-loose flex flex-col gap-1">
               {trainer.qualifications.map((item, idx) => (
                 <span key={idx}>{item}</span>
               ))}
             </div>
           </div>

           {/* Bottom Banner Image CTA */}
           <div className="mt-4 mb-4 relative w-full h-[250px] md:h-[300px] rounded-[24px] overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" 
               alt="Training" 
               className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
               <h3 className="text-white font-serif text-3xl md:text-4xl mb-6 font-light">Training for life</h3>
               <button className="bg-white text-black text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors">
                 Get In Touch
               </button>
             </div>
           </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] flex flex-col text-white">
      <Navbar />

      <section className="w-full pt-28 flex-1">
        


        {/* Grid of Cards - 4 columns, 5 rows = 20 total */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16 px-6 md:px-12 py-10 pb-32">
          {TRAINERS.map((trainer, index) => (
            <motion.div 
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="relative group rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer bg-[#111]"
            >
              {/* Background Image - High Contrast Grayscale */}
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              
              {/* Gradient overlay to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Left Tag */}
              <div className="absolute top-5 left-5 bg-[#1a1a1a]/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white/90 font-bold tracking-widest uppercase border border-white/5 z-10">
                {trainer.tag}
              </div>
              
              {/* Bottom Details Container (Name + Bio) */}
              <div className="absolute left-6 right-20 bottom-6 flex flex-col justify-end z-10">
                <h3 className="text-white text-xl md:text-2xl font-bold font-sans tracking-tight transform group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  {trainer.name}
                </h3>
                {/* Short Bio fades and slides in on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden">
                  <p className="text-white/90 text-[11px] md:text-xs leading-relaxed">
                    {trainer.shortBio}
                  </p>
                </div>
              </div>
              
              {/* Bottom Right Arrow Button */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg z-10">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Side Drawer Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <TrainerDrawer 
            trainer={selectedTrainer} 
            onClose={() => setSelectedTrainer(null)} 
          />
        )}
      </AnimatePresence>

      <EnquireToday />

      <Footer />
    </main>
  );
}
