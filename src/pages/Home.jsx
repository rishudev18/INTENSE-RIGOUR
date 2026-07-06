import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import TrainingSection from "../components/TrainingSection";
import InsideSection from "../components/InsideSection";
import StorySection from "../components/StorySection";
import TrainersSection from "../components/TrainersSection";

const brand = "INTENSE RIGOUR";
const city = "Gurugram"; // Assumed from context, or can be left as placeholder

const imageParams = "auto=format&fit=crop&q=82";

const features = [
  {
    eyebrow: "Classes",
    title: "Work at the edge without losing the room.",
    body: "Small-format strength, conditioning, reformer, cycle, yoga, and mobility sessions are coached with intent, so every block has a reason.",
    link: "Classes",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=82",
  },
  {
    eyebrow: "Facilities",
    title: "A club built for the hours around training.",
    body: "Open lifting floors, calibrated cardio, heat therapy, quiet changing rooms, and places to reset between work and the rest of the day.",
    link: "Facilities",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=82",
  },
  {
    eyebrow: "Personal Training",
    title: "Precise coaching, measured over time.",
    body: "One-to-one training begins with how you move now, then builds strength, capacity, and confidence through clear progression.",
    link: "Personal training",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=82",
  },
  {
    eyebrow: "Wellness",
    title: "Recovery that earns its place in the week.",
    body: "Nutrition guidance, breath-led recovery, sports therapy, and sauna time support the work instead of decorating it.",
    link: "Wellness",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=82",
  },
];

const locations = [
  {
    name: "Central Quarter",
    address: `14 Mercer Row, ${city}`,
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Riverside",
    address: `2 Stone Wharf, ${city}`,
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "North House",
    address: `88 Assembly Street, ${city}`,
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Garden Lane",
    address: `5 Garden Lane, ${city}`,
    image:
      "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "West End",
    address: `21 Halden Yard, ${city}`,
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Old Market",
    address: `9 Foundry Walk, ${city}`,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=82",
  },
];

const classes = [
  {
    name: "Foundations",
    body: "A coached lift session focused on tempo, range, and stable mechanics.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Engine Room",
    body: "Intervals on bike, ski, row, and sled with clean pacing and recovery windows.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Reformer Control",
    body: "Slow pilates sequences that build trunk strength and joint control.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Boxing Method",
    body: "Pad work, footwork, and bag rounds with technical coaching throughout.",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Mobility Lab",
    body: "Active range work for hips, spine, and shoulders before heavier weeks.",
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Strength Circuit",
    body: "Compound lifts and loaded carries arranged for density, not haste.",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Ride",
    body: "Rhythm-led indoor cycling with climbs, flats, and breath-led cooldowns.",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=82",
  },
  {
    name: "Sauna Reset",
    body: "Guided heat exposure and down-regulation after demanding training days.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=82",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function TextLink({ children, href = "#" }) {
  return (
    <a href={href} className="quiet-link">
      <span>{children}</span>
      <span aria-hidden="true">{"->"}</span>
    </a>
  );
}

function FeatureBlock({ feature, index }) {
  const reversed = index % 2 === 1;

  return (
    <section
      data-reveal
      className={`feature-block ${reversed ? "lg:[&_.feature-image]:order-2" : ""}`}
    >
      <div className="feature-image">
        <img src={feature.image} alt={`${feature.eyebrow} at ${brand}`} />
      </div>
      <div className="feature-copy">
        <p className="eyebrow">{feature.eyebrow}</p>
        <h2>{feature.title}</h2>
        <p>{feature.body}</p>
        <TextLink>{feature.link}</TextLink>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navbar />

      <section id="top" className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?${imageParams}&w=2200`}
          className="hero-image"
        >
          <source src="/Cinematic Gym Video Compress.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content" data-reveal>
          <h1>
            Training
            <span>for life</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <a 
              href="/membership" 
              className="border border-white/20 text-bone px-10 py-4 md:py-5 rounded-full font-sans text-xs md:text-sm tracking-wide uppercase font-semibold hover:border-bone hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-3 group cursor-pointer"
            >
              <span>Discover Membership</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 font-light">→</span>
            </a>
          </div>
        </div>

        {/* Minimal Scroll Cue (Chevron) */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <ChevronDown size={44} strokeWidth={1.5} />
        </motion.div>
      </section>

      <section id="about" data-reveal className="intro-section">
        <p>
          Built for people who already train, {brand} brings serious coaching,
          thoughtful spaces, and calm service into one club experience in {city}.
        </p>
      </section>

      <TrainingSection />


      <TrainersSection />

      <StorySection />

      <section id="membership" data-reveal className="membership-note">
        <p>Membership is shaped around the club you use, the way you train, and the support you want around it.</p>
        <TextLink href="/membership">Membership enquiries</TextLink>
      </section>

      <footer id="contact">
        <div className="footer-inner">
          <a href="#top" className="font-display text-2xl">{brand}</a>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="YouTube">Yt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
