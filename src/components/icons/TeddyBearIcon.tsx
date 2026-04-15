import React from 'react';

interface TeddyBearIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const TeddyBearIcon: React.FC<TeddyBearIconProps> = ({ size = 32, color = 'currentColor', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Left ear */}
    <circle cx="5.5" cy="5.5" r="2" />
    {/* Right ear */}
    <circle cx="18.5" cy="5.5" r="2" />
    {/* Head */}
    <circle cx="12" cy="9" r="5" />
    {/* Eyes */}
    <circle cx="10" cy="8" r="0.6" fill={color} stroke="none" />
    <circle cx="14" cy="8" r="0.6" fill={color} stroke="none" />
    {/* Nose */}
    <ellipse cx="12" cy="10" rx="1.2" ry="0.8" fill={color} stroke="none" />
    {/* Smile */}
    <path d="M10.5 11.2 Q12 12.5 13.5 11.2" strokeWidth="1.2" />
    {/* Body */}
    <ellipse cx="12" cy="18" rx="5" ry="4.5" />
    {/* Belly circle */}
    <circle cx="12" cy="18" r="2.2" strokeWidth="1" />
    {/* Left arm */}
    <path d="M7 16 Q4 15 4.5 18" strokeWidth="1.5" />
    {/* Right arm */}
    <path d="M17 16 Q20 15 19.5 18" strokeWidth="1.5" />
    {/* Left leg */}
    <path d="M9 22 Q8 23.5 7 22.5" strokeWidth="1.5" />
    {/* Right leg */}
    <path d="M15 22 Q16 23.5 17 22.5" strokeWidth="1.5" />
  </svg>
);

export default TeddyBearIcon;
