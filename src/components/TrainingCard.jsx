import React from "react";
import { GlowCard } from "./ui/spotlight-card";

export default function TrainingCard({ training }) {
  return (
    <GlowCard className="tc-wrap !p-0 !border-0 !overflow-visible group" customSize={true} glowColor="white">
      
      {/* Inner clipping wrapper for media and overlays */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden z-0 pointer-events-none">
        {/* Background layer: Video or Image */}
        <div className="tc-media-wrap">
        {training.video ? (
          <video
            src={training.video}
            autoPlay
            loop
            muted
            playsInline
            className="tc-media"
          />
        ) : (
          <img
            src={training.image}
            alt={training.title}
            className="tc-media"
          />
        )}
      </div>

      {/* Depth Layers */}
      <div className="tc-overlay pointer-events-none" /> {/* Gradient */}
      <div className="tc-noise pointer-events-none" />   {/* Texture */}
      <div className="tc-shadow pointer-events-none" />  {/* Vignette/Shadow */}
      
      </div> {/* End inner clipping wrapper */}

      {/* Content block — pinned to bottom, flex-end layout */}
      <div className="tc-content relative z-20 pointer-events-none">
        
        {/* Hover content is placed ABOVE the title in the DOM */}
        {training.description && (
          <p className="tc-desc">{training.description}</p>
        )}
        
        <a href={training.link} className="tc-cta pointer-events-auto" aria-label={`Explore ${training.title}`}>
          <span>{training.ctaText || "Explore"}</span>
          <span aria-hidden="true">→</span>
        </a>

        {/* Title is completely anchored to the bottom */}
        <div className="tc-title-wrapper">
          <h3 className="tc-title">{training.title}</h3>
        </div>
      </div>
    </GlowCard>
  );
}
