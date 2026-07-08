import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface LogoPulseProps {
  children: React.ReactNode;
  duration?: number;
  scale?: number;
  className?: string;
}

export const LogoPulse: React.FC<LogoPulseProps> = ({
  children,
  duration = 2,
  scale = 1.05,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
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
export default LogoPulse;
