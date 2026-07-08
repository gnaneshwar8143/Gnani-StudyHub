import React from 'react';

interface LogoFloatProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
}

export const LogoFloat: React.FC<LogoFloatProps> = ({
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};
export default LogoFloat;
