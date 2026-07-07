import React from 'react';
import { motion } from 'framer-motion';

/**
 * Universal Button Component
 * Consumes global design tokens mapped in Tailwind config.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  // Base classes (Typography, Flexbox, Transitions)
  const baseClasses = 
    "inline-flex items-center justify-center font-body font-semibold text-base capitalize transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent";

  // Variant classes
  const variantClasses = {
    primary: "bg-white text-black rounded-2xl shadow-[0_4px_14px_rgba(255,255,255,0.1)] hover:bg-[#050505] hover:text-white disabled:bg-surface disabled:text-secondary disabled:shadow-none",
    secondary: "bg-transparent border border-border text-white rounded-2xl hover:bg-surface disabled:opacity-50",
    ghost: "bg-transparent text-white rounded-2xl hover:bg-white/5 disabled:opacity-50",
    icon: "bg-surface border border-border text-white rounded-full hover:bg-surface-elevated hover:border-accent disabled:opacity-50",
  };

  // Size classes
  const sizeClasses = {
    lg: "h-[56px] px-8",
    md: "h-[48px] px-6",
    sm: "h-[40px] px-4 text-sm",
    icon: "h-[48px] w-[48px] p-0 flex items-center justify-center",
  };

  // Resolve final size (Icon variant forces icon size)
  const finalSize = variant === 'icon' ? 'icon' : size;

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[finalSize]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
