import React from 'react';

interface LogoPulseProps {
  children: React.ReactNode;
  duration?: number;
  scale?: number;
  className?: string;
}

export const LogoPulse: React.FC<LogoPulseProps> = ({
  children,
  className = '',
}) => {
  return <div className={className}>{children}</div>;
};
export default LogoPulse;
