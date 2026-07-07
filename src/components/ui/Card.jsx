import React from 'react';
import { motion } from 'framer-motion';

/**
 * Universal Card Component
 * Enforces editorial identity, precise hover motions, and strips glassmorphism.
 */
export const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`group relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden transition-colors duration-300 shadow-sm hover:shadow-lg hover:border-accent ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
      />
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col p-8 flex-1 ${className}`}>
      {children}
    </div>
  );
};

export const CardCategory = ({ children, className = '' }) => {
  return (
    <span className={`font-body font-medium text-[14px] text-accent mb-2 uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
};

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`font-heading font-semibold text-[24px] text-primary leading-tight mb-3 ${className}`}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`font-body font-normal text-[16px] text-secondary leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
