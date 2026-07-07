import React from 'react';

export default function Footer() {
  const linkClass = "relative w-fit text-white/70 hover:text-white text-sm md:text-[0.95rem] transition-all duration-300 hover:translate-x-1 hover:underline underline-offset-4 decoration-white/30";

  return (
    <footer className="bg-[#050505] text-white pt-14 md:pt-16 overflow-hidden font-sans border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section: Grid of Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10 md:pb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-start">
            
            {/* Direct Contact Info */}
            <div className="flex flex-col gap-2.5 text-white/70 text-sm md:text-[0.95rem] mt-1 font-sans">
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-base">📍</span> Gurugram
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-base">☎</span> +91 XXXXX XXXXX
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-base">✉</span> hello@intenserigour.com
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 mt-4 md:mt-0">
            {/* Explore */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white/40 text-xs font-medium mb-1 uppercase tracking-wider">Explore</h4>
              <a href="/" className={linkClass}>Home</a>
              <a href="/about" className={linkClass}>About</a>
              <a href="/membership" className={linkClass}>Memberships</a>
              <a href="/trainers" className={linkClass}>Trainers</a>
              <a href="/#gallery" className={linkClass}>Gallery</a>
              <a href="/contact" className={linkClass}>Contact</a>
            </div>
            
            {/* Connect */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white/40 text-xs font-medium mb-1 uppercase tracking-wider">Connect</h4>
              <a href="#" className={linkClass}>Instagram</a>
              <a href="#" className={linkClass}>Facebook</a>
              <a href="#" className={linkClass}>Google Reviews</a>
            </div>
            
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white/40 text-xs font-medium mb-1 uppercase tracking-wider">Contact</h4>
              <a href="tel:1234567890" className={linkClass}>Call</a>
              <a href="mailto:contact@intenserigour.com" className={linkClass}>Email</a>
              <a href="#" className={linkClass}>WhatsApp</a>
              <a href="#join" className={linkClass}>Book Trial</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width divider above watermark */}
      <div className="w-full border-t border-white/5 mt-2 md:mt-4"></div>
      
      {/* Giant Watermark Text */}
      <div className="w-full overflow-hidden flex justify-center items-center pointer-events-none select-none px-4 py-8 md:py-14">
        <h1 className="text-[14.5vw] leading-[0.75] tracking-[-0.05em] font-sans font-black text-white/[0.03] whitespace-nowrap">
          intense rigour
        </h1>
      </div>

      {/* Thin Subtle Divider & Bottom Bar */}
      <div className="border-t border-white/5 mx-6 md:mx-12 lg:mx-20 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-white/40">
        <div className="font-sans leading-relaxed">
          © 2026 Intense Rigour.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>All Rights Reserved.
        </div>
        <div className="flex gap-2 font-serif italic text-[13px] text-white/30">
          <span>powered by Intense Rigour</span>
        </div>
      </div>
    </footer>
  );
}
