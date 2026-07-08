import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface LogoGlowProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
  maxOpacity?: number;
  className?: string;
}

export const LogoGlow: React.FC<LogoGlowProps> = ({
  children,
  color = 'rgba(59, 130, 246, 0.4)', // AI blue glow
  duration = 3,
  maxOpacity = 0.20,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Outer Glow container */}
      <motion.div
        animate={{
          opacity: [0.03, maxOpacity, 0.03],
          scale: [0.97, 1.03, 0.97],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: `0 0 45px ${color}`,
        }}
        className="absolute inset-0 rounded-full blur-[20px] pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default LogoGlow;
