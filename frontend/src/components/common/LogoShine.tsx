import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface LogoShineProps {
  children: React.ReactNode;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export const LogoShine: React.FC<LogoShineProps> = ({
  children,
  duration = 2.2,
  repeatDelay = 5.8,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {children}
      {/* Light Sweep Reflection overlay */}
      <motion.div
        animate={{
          left: ['-150%', '150%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 70%)',
        }}
        className="absolute top-0 bottom-0 w-[50%] pointer-events-none skew-x-12 z-20"
      />
    </div>
  );
};
export default LogoShine;
