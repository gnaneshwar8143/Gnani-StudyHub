import React from 'react';

interface LogoGlowProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
  maxOpacity?: number;
  className?: string;
}

export const LogoGlow: React.FC<LogoGlowProps> = ({
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};
export default LogoGlow;
