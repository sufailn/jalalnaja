import React from 'react';

// Elegant Corner Filigree for invitation cards
export const CornerOrnament: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10 text-[#B59A65]",
  color = "currentColor",
}) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M3 57V25C3 12.8497 12.8497 3 25 3H57"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 57V27C8 16.5066 16.5066 8 27 8H57"
      stroke={color}
      strokeWidth="0.75"
      strokeDasharray="2 2"
    />
    <circle cx="25" cy="25" r="3" fill={color} />
    <path
      d="M16 16C21 21 21 21 21 21"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M3 3L12 12M3 3H10M3 3V10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="38" cy="8" r="1.5" fill={color} />
    <circle cx="8" cy="38" r="1.5" fill={color} />
  </svg>
);

// Traditional Mughal / Ottoman Floral Crest Arch
export const MughalArchMotif: React.FC<{ className?: string; color?: string }> = ({
  className = "w-48 h-24 text-[#414B2E]",
  color = "currentColor",
}) => (
  <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cusped arch outline */}
    <path
      d="M10 75C25 50 45 42 65 42C75 42 85 36 90 28C95 20 100 8 100 8C100 8 105 20 110 28C115 36 125 42 135 42C155 42 175 50 190 75"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M20 75C32 55 50 48 68 48C76 48 85 43 90 35C95 28 100 16 100 16C100 16 105 28 110 35C115 43 124 48 132 48C150 48 168 55 180 75"
      stroke={color}
      strokeWidth="0.8"
      strokeDasharray="2 3"
    />
    {/* Central finial / blossom */}
    <circle cx="100" cy="8" r="3" fill={color} />
    <circle cx="100" cy="22" r="2.5" fill={color} />
    {/* Side floral buds */}
    <path
      d="M90 28C86 24 82 23 78 24C80 27 82 30 87 31"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M110 28C114 24 118 23 122 24C120 27 118 30 113 31"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Botanical Olive Leaf Sprig
export const OliveBranch: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = "w-28 h-12 text-[#899477]",
  flipped = false,
}) => (
  <svg
    viewBox="0 0 140 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? "-scale-x-100" : ""}`}
  >
    {/* Stem */}
    <path
      d="M5 40C30 38 60 30 95 22C115 17 130 10 135 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path
      d="M30 38C26 28 32 20 40 22C42 28 38 36 30 38Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    <path
      d="M55 31C53 20 62 14 70 18C70 24 64 30 55 31Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    <path
      d="M80 24C80 12 90 8 98 13C96 20 89 24 80 24Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    <path
      d="M108 17C110 6 120 4 126 10C122 16 116 19 108 17Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    {/* Underside leaves */}
    <path
      d="M45 35C48 44 42 48 35 46C36 40 40 36 45 35Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M72 27C76 36 70 42 63 39C63 33 67 29 72 27Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    <path
      d="M96 20C102 28 97 34 90 32C90 26 93 22 96 20Z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    {/* Small olive fruit */}
    <ellipse cx="66" cy="36" rx="3.5" ry="5" fill="#414B2E" transform="rotate(-20 66 36)" />
    <ellipse cx="102" cy="27" rx="3" ry="4.5" fill="#414B2E" transform="rotate(-15 102 27)" />
  </svg>
);

// Vintage Floral Divider with central emblem
export const OrnamentalDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full max-w-md my-6 text-[#B59A65]",
  color = "currentColor",
}) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#B59A65]/60 to-[#B59A65]" />
    <svg viewBox="0 0 40 20" fill="none" className="w-8 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="10" r="3" fill={color} />
      <path d="M20 2V6M20 14V18M12 10H16M24 10H28" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1.5" fill={color} />
      <circle cx="31" cy="10" r="1.5" fill={color} />
    </svg>
    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#B59A65]/60 to-[#B59A65]" />
  </div>
);

// Wax Seal Monogram Component with Custom Logo Support
export const WaxSealEmblem: React.FC<{
  monogram?: string;
  useLogo?: boolean;
  variant?: 'burgundy' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}> = ({
  monogram = "M & N",
  useLogo = true,
  variant = 'burgundy',
  size = 'md',
  onClick,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-14 h-14 text-xs",
    md: "w-20 h-20 text-sm",
    lg: "w-28 h-28 text-base",
  }[size];

  const bgClasses = variant === 'burgundy' ? 'wax-seal text-[#F4F0E6]' : 'gold-seal text-[#37352F]';

  return (
    <div
      onClick={onClick}
      className={`relative rounded-full flex items-center justify-center select-none cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeClasses} ${bgClasses} ${className}`}
      style={{
        boxShadow: variant === 'burgundy' 
          ? '0 6px 20px rgba(84, 45, 58, 0.45), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.5)'
          : '0 6px 20px rgba(181, 154, 101, 0.4), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.3)',
      }}
    >
      {/* Irregular outer melted wax edge rim */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="4 2 8 3"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>
      {/* Inner embossed seal ring */}
      <div className="absolute inset-1.5 border border-current/35 rounded-full flex items-center justify-center overflow-hidden">
        {useLogo ? (
          <div className="w-4/5 h-4/5 flex items-center justify-center p-1">
            <img
              src={variant === 'burgundy' ? '/assets/aistudio/logo_cropped_gold.png' : '/assets/aistudio/logo_cropped_olive.png'}
              alt="Seal Logo"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        ) : (
          <span className="font-script tracking-wider text-center drop-shadow-sm font-bold">
            {monogram}
          </span>
        )}
      </div>
    </div>
  );
};

// Botanical Vine with Leaves and Buds for Background Depth
export const BotanicalVine: React.FC<{
  className?: string;
  color?: string;
  flipped?: boolean;
}> = ({
  className = "w-48 h-64 text-[#414B2E]",
  color = "currentColor",
  flipped = false,
}) => (
  <svg
    viewBox="0 0 160 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? "-scale-x-100" : ""}`}
  >
    {/* Graceful S-curve main stem */}
    <path
      d="M20 210C35 170 15 130 45 90C65 65 95 40 140 15"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Secondary branching stems */}
    <path
      d="M32 150C55 145 75 130 85 110"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <path
      d="M48 90C70 82 90 70 105 50"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    {/* Olive leaves with delicate rib lines */}
    <path
      d="M32 150C42 135 60 138 65 152C55 162 38 158 32 150Z"
      fill={color}
      fillOpacity="0.45"
      stroke={color}
      strokeWidth="0.5"
    />
    <path
      d="M85 110C95 95 112 100 115 114C102 122 88 118 85 110Z"
      fill={color}
      fillOpacity="0.5"
      stroke={color}
      strokeWidth="0.5"
    />
    <path
      d="M48 90C56 72 74 74 78 88C66 98 52 96 48 90Z"
      fill={color}
      fillOpacity="0.45"
      stroke={color}
      strokeWidth="0.5"
    />
    <path
      d="M105 50C118 36 135 40 138 54C124 64 110 60 105 50Z"
      fill={color}
      fillOpacity="0.5"
      stroke={color}
      strokeWidth="0.5"
    />
    <path
      d="M140 15C148 5 158 10 155 22C145 28 138 22 140 15Z"
      fill={color}
      fillOpacity="0.6"
    />
    {/* Opposite leaves */}
    <path
      d="M26 180C14 172 16 156 28 158C34 168 32 178 26 180Z"
      fill={color}
      fillOpacity="0.4"
    />
    <path
      d="M40 120C28 112 30 96 42 100C46 110 44 118 40 120Z"
      fill={color}
      fillOpacity="0.4"
    />
    <path
      d="M75 65C62 58 64 42 78 46C82 56 80 64 75 65Z"
      fill={color}
      fillOpacity="0.4"
    />
    {/* Small olive fruits */}
    <ellipse cx="68" cy="125" rx="3" ry="4.5" fill="#414B2E" fillOpacity="0.6" transform="rotate(25 68 125)" />
    <ellipse cx="112" cy="72" rx="3" ry="4.5" fill="#414B2E" fillOpacity="0.6" transform="rotate(-15 112 72)" />
  </svg>
);

// Graceful GSAP Background Botanicals with Subtle Depth Pulse
export const BackgroundBotanicals: React.FC<{
  variant?: 'light' | 'dark';
  className?: string;
}> = ({
  variant = 'light',
  className = "",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Gentle floating and breathing opacity animation
    const elements = containerRef.current?.querySelectorAll('.botanical-ornament');
    if (!elements || elements.length === 0) return;

    elements.forEach((el, index) => {
      const baseDelay = index * 0.9;
      const duration = 6.5 + (index % 3) * 1.5;

      el.animate(
        [
          { opacity: variant === 'light' ? 0.12 : 0.08, transform: 'translateY(0px) rotate(0deg)' },
          { opacity: variant === 'light' ? 0.28 : 0.22, transform: 'translateY(-12px) rotate(1.5deg)' },
          { opacity: variant === 'light' ? 0.12 : 0.08, transform: 'translateY(0px) rotate(0deg)' },
        ],
        {
          duration: duration * 1000,
          delay: baseDelay * 1000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });
  }, [variant]);

  const colorClass = variant === 'light' ? 'text-[#414B2E]' : 'text-[#B59A65]';

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Top Left Botanical Vine */}
      <div className="botanical-ornament absolute -top-8 -left-6 sm:top-4 sm:left-4 opacity-15">
        <BotanicalVine className={`w-36 h-48 sm:w-56 sm:h-72 ${colorClass}`} />
      </div>

      {/* Top Right Botanical Vine */}
      <div className="botanical-ornament absolute -top-8 -right-6 sm:top-4 sm:right-4 opacity-15">
        <BotanicalVine className={`w-36 h-48 sm:w-56 sm:h-72 ${colorClass}`} flipped />
      </div>

      {/* Bottom Left Botanical Sprig */}
      <div className="botanical-ornament absolute -bottom-10 -left-6 sm:bottom-4 sm:left-4 opacity-15">
        <BotanicalVine className={`w-36 h-48 sm:w-56 sm:h-72 ${colorClass}`} flipped />
      </div>

      {/* Bottom Right Botanical Sprig */}
      <div className="botanical-ornament absolute -bottom-10 -right-6 sm:bottom-4 sm:right-4 opacity-15">
        <BotanicalVine className={`w-36 h-48 sm:w-56 sm:h-72 ${colorClass}`} />
      </div>
    </div>
  );
};

