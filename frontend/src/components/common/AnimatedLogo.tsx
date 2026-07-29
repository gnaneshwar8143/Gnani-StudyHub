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

  // Map to exact requested dimensions:
  // Login/Register: 110px, Navbar/Header: 44px, Sidebar: 44px
  const finalSize = size || (
    isLogin ? 110 :
    isSidebar ? 44 :
    isCollapsed ? 40 :
    isHeader ? 44 :
    isProfile ? 56 :
    44
  );

  const logoSrc = '/gnani-logo.png';

  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ 
        width: finalSize, 
        height: finalSize,
        padding: '0px',
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
