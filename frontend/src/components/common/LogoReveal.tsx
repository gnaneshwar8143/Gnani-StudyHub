import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface LogoRevealProps {
  children: React.ReactNode;
  direction?: 'top' | 'left' | 'scale' | 'none';
  duration?: number;
  delay?: number;
  className?: string;
}

export const LogoReveal: React.FC<LogoRevealProps> = ({
  children,
  direction = 'scale',
  duration = 0.6,
  delay = 0,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ opacity: 1 }}>
        {children}
      </div>
    );
  }

  const getInitialProps = () => {
    switch (direction) {
      case 'top':
        return { opacity: 0, y: -20, scale: 0.9 };
      case 'left':
        return { opacity: 0, x: -20, scale: 0.95 };
      case 'scale':
        return { opacity: 0, scale: 0.85 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialProps()}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default LogoReveal;
