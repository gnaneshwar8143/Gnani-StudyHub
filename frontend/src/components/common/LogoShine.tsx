import React from 'react';

interface LogoShineProps {
  children: React.ReactNode;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export const LogoShine: React.FC<LogoShineProps> = ({
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};
export default LogoShine;
