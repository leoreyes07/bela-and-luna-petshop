import React from 'react';

interface BowlIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const BowlIcon: React.FC<BowlIconProps> = ({ size = 32, color = 'currentColor', className }) => (
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
    {/* Bowl top rim */}
    <ellipse cx="12" cy="10" rx="9" ry="3.5" />
    {/* Bowl body */}
    <path d="M3 10c0 6 3 9 9 9s9-3 9-9" />
    {/* Food / Water curve */}
    <path d="M6 10.5c2 1.5 5.5 2 9 0" />
    {/* Base rim */}
    <path d="M7 19h10v1c0 1.5-2.5 2-5 2s-5-.5-5-2v-1z" />
  </svg>
);

export default BowlIcon;
