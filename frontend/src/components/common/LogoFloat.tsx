import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface LogoFloatProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
}

export const LogoFloat: React.FC<LogoFloatProps> = ({
  children,
  amplitude = 4,
  duration = 4,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default LogoFloat;
