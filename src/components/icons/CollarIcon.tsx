import React from 'react';

interface CollarIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const CollarIcon: React.FC<CollarIconProps> = ({ size = 32, color = 'currentColor', className }) => (
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
    {/* Collar circle */}
    <ellipse cx="12" cy="11" rx="8" ry="6" />
    <path d="M4 11v2c0 3.3 3.6 6 8 6s8-2.7 8-6v-2" />
    {/* Buckle */}
    <rect x="10" y="6" width="4" height="4" rx="1" />
    <path d="M12 8v2" />
    {/* Tag hanging */}
    <path d="M12 19v2" />
    <circle cx="12" cy="22" r="1.5" />
    {/* Adjust holes */}
    <circle cx="6" cy="12" r="0.5" fill={color} stroke="none" />
    <circle cx="18" cy="12" r="0.5" fill={color} stroke="none" />
  </svg>
);

export default CollarIcon;
