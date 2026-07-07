import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Memberships', href: '/membership' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);
  const logoRef = useRef(null);
  const mobileLogoRef = useRef(null);
  const linksRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Page Load Animation Timeline
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }
    )
      .fromTo([logoRef.current, mobileLogoRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' },
        "-=0.5"
      )
      .fromTo(linksRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        "-=0.3"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
        "-=0.2"
      );

    // Active Section Tracking & Scroll State
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      let current = '';
      const sections = ['about', 'membership', 'gallery', 'contact'];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pointer-events-auto border-b transition-colors duration-300 ${isScrolled ? 'bg-[#050505] border-white/10' : 'bg-transparent border-transparent'}`}
      >

        {/* Desktop Navbar */}
        <nav
          className="hidden md:flex relative w-full max-w-[1400px] h-[64px] rounded-none items-center justify-between px-10 origin-top"
        >
          {/* Logo */}
          <Link
            to="/"
            ref={logoRef}
            className="font-display font-bold text-2xl tracking-normal text-bone flex-shrink-0 z-10"
          >
            Intense Rigour
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link key={link.name} to={link.href} ref={el => linksRef.current[index] = el}>
                  <motion.div
                    className={`relative font-sans text-[11px] md:text-xs uppercase tracking-[0.1em] font-bold transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.span
                      variants={{
                        initial: { y: 0, letterSpacing: '0em' },
                        hover: { y: -2, letterSpacing: '0.02em' }
                      }}
                      transition={{ duration: 0.25 }}
                      className="block"
                    >
                      {link.name}
                    </motion.span>

                    {/* Hover Underline */}
                    <motion.div
                      className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-white origin-center"
                      variants={{
                        initial: { scaleX: 0, opacity: 0 },
                        hover: { scaleX: 1, opacity: 1 }
                      }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button Desktop */}
          <div className="z-10" ref={ctaRef}>
            <Button variant="primary" size="sm" onClick={() => navigate('/membership')}>
              Join Us
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav
          className="md:hidden w-full h-[64px] flex items-center justify-between px-5"
        >
          {/* Logo */}
          <Link
            to="/"
            ref={mobileLogoRef}
            className="font-display font-bold text-lg tracking-normal text-bone flex-shrink-0"
          >
            Intense Rigour
          </Link>

          {/* Right Side: Join Now & Hamburger */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" onClick={() => navigate('/membership')}>
              Join Us
            </Button>

            {/* Hamburger */}
            <button
              className="flex flex-col justify-center items-center w-8 h-8 z-[110] relative text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-5 h-[1.5px] bg-white mb-[4px] block rounded-full"
                animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="w-5 h-[1.5px] bg-white mb-[4px] block rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="w-5 h-[1.5px] bg-white block rounded-full"
                animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[90] bg-[#050505]/90 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                    className="font-sans text-3xl font-medium text-white tracking-wide"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Button 
                variant="primary" 
                size="lg" 
                className="mt-6"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/membership');
                }}
              >
                Get Membership
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}