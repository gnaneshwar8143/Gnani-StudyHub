import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedLogoProps {
  type?: 'login' | 'sidebar' | 'header' | 'splash' | 'simple';
  size?: number;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  type = 'simple',
  size,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Determine standard size based on placement
  const isLogin = type === 'login';
  const isSidebar = type === 'sidebar';
  const isHeader = type === 'header';
  const isSplash = type === 'splash';

  const finalSize = size || (isLogin ? 180 : isSidebar ? 42 : isHeader ? 32 : isSplash ? 220 : 52);
  const useFullLogo = isLogin || isSplash;
  const logoSrc = useFullLogo ? '/gnani-logo-full.png' : '/gnani-logo.png';

  // Animation variants
  const entranceVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : isLogin ? -20 : 0,
      x: shouldReduceMotion ? 0 : isSidebar ? -15 : 0,
      scale: shouldReduceMotion ? 1 : isSplash ? 0.8 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: isSplash ? 0.9 : isLogin ? 0.7 : 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const hoverScale = isSidebar ? 1.08 : isHeader ? 1.05 : 1.06;
  const hoverRotate = isLogin ? 2 : 0;
  const glowColor = 'rgba(59, 130, 246, 0.25)'; // Premium AI blue glow

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Entrance and Hover wrapper */}
      <motion.div
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                scale: hoverScale,
                rotate: hoverRotate,
                filter: `drop-shadow(0 0 16px ${glowColor})`,
                transition: { duration: 0.25, ease: 'easeOut' },
              }
        }
        whileTap={{ scale: 0.98 }}
        style={{ width: finalSize, height: finalSize }}
        className="relative z-10 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl"
      >
        {/* Idle floating animation wrapper */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: isLogin ? [-4, 4, -4] : isSidebar ? [-1.5, 1.5, -1.5] : [0, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* 1. Center AI Brain Glow (pulsing behind the brain area) */}
          {!shouldReduceMotion && (
            <motion.div
              style={{
                width: finalSize * 0.25,
                height: finalSize * 0.25,
                // Adjust position for full logo (which has GNANI text below) vs square logo
                left: useFullLogo ? '53.8%' : '53.8%',
                top: useFullLogo ? '36.5%' : '44.8%',
              }}
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.08, 0.22, 0.08],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[8px] pointer-events-none"
            />
          )}

          {/* 2. Metallic Shine Sweep (overlay that sweeps horizontally/diagonally) */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                left: ['-150%', '150%'],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: isLogin ? 5.8 : 7.8, // 8s total for login, 10s for sidebar
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 70%)',
              }}
              className="absolute top-0 bottom-0 w-[50%] pointer-events-none skew-x-12 z-20"
            />
          )}

          {/* 3. Outer Blue Glow Pulse (very subtle) */}
          {!shouldReduceMotion && isLogin && (
            <motion.div
              animate={{
                opacity: [0.03, 0.12, 0.03],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-blue-500/10 blur-[30px] rounded-full pointer-events-none"
            />
          )}

          {/* 4. Digital Pixels Shimmer (Cyan dots that flash on upper-left) */}
          {!shouldReduceMotion && !isHeader && (
            <>
              {/* Pixel 1 */}
              <motion.div
                style={{
                  width: finalSize * 0.025,
                  height: finalSize * 0.025,
                  left: useFullLogo ? '25%' : '18%',
                  top: useFullLogo ? '14%' : '14%',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.25, 1],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4, // 6 seconds total
                  ease: 'easeInOut',
                }}
                className="absolute rounded bg-cyan-400 blur-[1px] shadow-sm shadow-cyan-400 z-20"
              />
              {/* Pixel 2 */}
              <motion.div
                style={{
                  width: finalSize * 0.025,
                  height: finalSize * 0.025,
                  left: useFullLogo ? '28%' : '23%',
                  top: useFullLogo ? '20%' : '21%',
                }}
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  scale: [1, 1.3, 1],
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 4.2,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute rounded bg-blue-400 blur-[1.2px] shadow-sm shadow-blue-400 z-20"
              />
              {/* Pixel 3 */}
              <motion.div
                style={{
                  width: finalSize * 0.02,
                  height: finalSize * 0.02,
                  left: useFullLogo ? '30%' : '28%',
                  top: useFullLogo ? '15%' : '16%',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4.5,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
                className="absolute rounded bg-sky-400 blur-[0.8px] shadow-sm shadow-sky-400 z-20"
              />
            </>
          )}

          {/* Actual Logo Image */}
          <img
            src={logoSrc}
            alt="Gnani Logo"
            width={finalSize}
            height={finalSize}
            className="w-full h-full object-contain relative z-10"
            style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
