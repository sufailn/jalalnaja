import React from 'react';

interface WeddingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'gold';
  showDate?: boolean;
  dateText?: string;
}

export const WeddingLogo: React.FC<WeddingLogoProps> = ({
  className = "",
  size = 'md',
  variant = 'dark',
  showDate = false,
  dateText = "24 DEC 2026",
}) => {
  const sizeStyles = {
    sm: "w-20 h-24",
    md: "w-32 h-36",
    lg: "w-48 h-52",
    xl: "w-64 h-72",
  }[size];

  const logoSrc =
    variant === 'gold' || variant === 'light'
      ? '/assets/aistudio/logo_cropped_gold.png'
      : '/assets/aistudio/logo_cropped_olive.png';

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${sizeStyles}`}>
        <img
          src={logoSrc}
          alt="Jalaludheen & Najah Monogram Logo"
          className="w-full h-full object-contain drop-shadow-xs"
          referrerPolicy="no-referrer"
        />
      </div>

      {showDate && (
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-[1px] bg-[#B59A65]/70" />
          <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#414B2E] font-medium">
            {dateText}
          </span>
          <div className="w-6 h-[1px] bg-[#B59A65]/70" />
        </div>
      )}
    </div>
  );
};
