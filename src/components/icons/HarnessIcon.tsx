import React from 'react';

interface HarnessIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const HarnessIcon: React.FC<HarnessIconProps> = ({ size = 32, color = 'currentColor', className }) => (
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
    {/* Side waist straps */}
    <path d="M6 12H3" />
    <path d="M21 12h-3" />
    <path d="M6 16H3" />
    <path d="M21 16h-3" />
    
    {/* Side Buckles */}
    <rect x="3" y="11" width="2" height="2" rx="0.5" />
    <rect x="19" y="11" width="2" height="2" rx="0.5" />
    <rect x="3" y="15" width="2" height="2" rx="0.5" />
    <rect x="19" y="15" width="2" height="2" rx="0.5" />

    {/* Front neck/chest straps branching out */}
    <path d="M9 6L5 2" />
    <path d="M15 6l4-4" />

    {/* Main padded body (vest shape) */}
    <path d="M8 6h8c1.5 0 2 1 2 2v7c0 1-1 3-6 3s-6-2-6-3V8c0-1 .5-2 2-2z" />
    
    {/* Neck opening contour */}
    <path d="M10 6v1c0 1.5 1 2 2 2s2-.5 2-2V6" />
    
    {/* Grab Handle in the middle of the back */}
    <path d="M12 11v4" strokeWidth="2.5" />
    
    {/* Leash D-Ring near the bottom edge */}
    <path d="M10.5 16v1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1" />
    <path d="M10 16h4" />
  </svg>
);

export default HarnessIcon;
