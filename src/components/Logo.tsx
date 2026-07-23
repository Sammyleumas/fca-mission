import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
  const textSizeClasses = {
    sm: 'text-sm font-black',
    md: 'text-base sm:text-lg font-black',
    lg: 'text-xl sm:text-2xl font-black'
  };

  const subtextSizeClasses = {
    sm: 'text-[9px] font-extrabold tracking-[0.22em]',
    md: 'text-[10px] sm:text-[11px] font-extrabold tracking-[0.24em]',
    lg: 'text-[12px] sm:text-[13px] font-extrabold tracking-[0.26em]'
  };

  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Visual Emblem matching shield + double connected infinity rings */}
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#002171] text-white shadow-md shadow-blue-900/20 shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-[72%] h-[72%]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Diamond */}
          <path d="M50 8 L54 16 L50 24 L46 16 Z" fill="#FFEB3B" />
          
          {/* Shield Outline */}
          <path 
            d="M50 22 C68 22 82 28 82 28 C82 52 74 72 50 88 C26 72 18 52 18 28 C18 28 32 22 50 22 Z" 
            fill="white" 
            fillOpacity="0.95"
          />
          
          {/* Intertwined Dual Rings (Infinity / Connection Symbol) in Primary Blue */}
          <circle cx="41" cy="52" r="14" stroke="#0D47A1" strokeWidth="5.5" fill="none" />
          <circle cx="59" cy="52" r="14" stroke="#0D47A1" strokeWidth="5.5" fill="none" />
          
          {/* Overlap Interlock Arc */}
          <path 
            d="M 50 40 A 14 14 0 0 1 54 59" 
            stroke="#0D47A1" 
            strokeWidth="5.5" 
            strokeLinecap="round" 
            fill="none" 
          />
        </svg>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col justify-center leading-none select-none">
          <span className={`tracking-tight leading-none ${textSizeClasses[size]} ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
            FUSION <span className={variant === 'light' ? 'text-yellow-300' : 'text-[#0D47A1]'}>CONNECT</span>
          </span>
          <span className={`uppercase mt-1 leading-none ${subtextSizeClasses[size]} ${variant === 'light' ? 'text-sky-200' : 'text-[#0D47A1]'}`}>
            ACADEMY
          </span>
        </div>
      )}
    </div>
  );
};

