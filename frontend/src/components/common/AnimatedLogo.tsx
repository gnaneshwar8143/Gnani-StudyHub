import React from 'react';

interface AnimatedLogoProps {
  type?: 'login' | 'sidebar' | 'collapsed' | 'header' | 'profile' | 'simple';
  size?: number;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  type = 'simple',
  size,
  className = '',
}) => {
  const isLogin = type === 'login';
  const isSidebar = type === 'sidebar';
  const isCollapsed = type === 'collapsed';
  const isHeader = type === 'header';
  const isProfile = type === 'profile';

  // Map to the user's exact requested dimensions
  const finalSize = size || (
    isLogin ? 180 :
    isSidebar ? 180 :
    isCollapsed ? 40 :
    isHeader ? 44 :
    isProfile ? 64 :
    52
  );

  // Login page uses the full logo with "GNANI" text; others use the square icon-only version
  const useFullLogo = isLogin;
  const logoSrc = useFullLogo ? '/gnani-logo-full.png' : '/gnani-logo.png';

  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ 
        width: finalSize, 
        height: finalSize,
        padding: isSidebar ? '10px' : '0px',
        boxSizing: 'border-box'
      }}
    >
      <img
        src={logoSrc}
        alt="Gnani Logo"
        className="w-full h-full object-contain max-w-full max-h-full"
      />
    </div>
  );
};
