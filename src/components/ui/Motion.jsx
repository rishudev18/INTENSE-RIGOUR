import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Global cinematic easing
const ease = [0.22, 0.61, 0.36, 1];

/**
 * Universal Reveal Component
 * Replaces ad-hoc fade-ups with a mathematically consistent cinematic reveal.
 * Respects prefers-reduced-motion.
 */
export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '',
  y = 30 // 30px -> 0 as requested
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, only fade opacity, do not translate.
  const initial = {
    opacity: 0,
    y: shouldReduceMotion ? 0 : y
  };

  const animate = {
    opacity: 1,
    y: 0
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Universal StaggerGroup Component
 * Automates the 80ms stagger between child items (like Cards).
 */
export const StaggerGroup = ({ children, staggerDelay = 0.08, className = '' }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        // We wrap each child in a motion.div that inherits the staggered reveal
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, ease }
              }
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
