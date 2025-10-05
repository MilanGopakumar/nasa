/**
 * NASA-inspired Insignia Component
 * 
 * This is a stylized space agency insignia inspired by NASA's design language.
 * For official NASA logo usage, please refer to NASA Media Usage Guidelines:
 * https://www.nasa.gov/multimedia/guidelines/index.html
 * 
 * Official NASA logos require permission for use. This is a custom insignia
 * that evokes the aesthetic without using protected trademarks.
 */

export function NASAInsignia({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NASA Exoplanet Explorer Insignia"
    >
      {/* Outer circle - main boundary */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner orbital rings */}
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="12"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      
      <ellipse
        cx="32"
        cy="32"
        rx="12"
        ry="24"
        stroke="url(#gradient3)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      
      {/* Central planet/star */}
      <circle
        cx="32"
        cy="32"
        r="8"
        fill="url(#gradient4)"
      />
      
      {/* Highlight on planet */}
      <circle
        cx="29"
        cy="29"
        r="3"
        fill="white"
        opacity="0.3"
      />
      
      {/* Orbiting exoplanet */}
      <circle
        cx="50"
        cy="32"
        r="4"
        fill="url(#gradient5)"
      />
      
      {/* Small stars */}
      <circle cx="12" cy="18" r="1.5" fill="#2dd4bf" opacity="0.8" />
      <circle cx="52" cy="20" r="1" fill="#ffb86b" opacity="0.8" />
      <circle cx="16" cy="48" r="1" fill="#2dd4bf" opacity="0.6" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#ffb86b" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffb86b" stopOpacity="0.6" />
        </linearGradient>
        
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb86b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.6" />
        </linearGradient>
        
        <radialGradient id="gradient4">
          <stop offset="0%" stopColor="#ffb86b" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </radialGradient>
        
        <radialGradient id="gradient5">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#1a9a8a" />
        </radialGradient>
      </defs>
    </svg>
  );
}
