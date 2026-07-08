import React from 'react';

interface LogoRevealProps {
  children: React.ReactNode;
  direction?: 'top' | 'left' | 'scale' | 'none';
  duration?: number;
  delay?: number;
  className?: string;
}

export const LogoReveal: React.FC<LogoRevealProps> = ({
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};
export default LogoReveal;
