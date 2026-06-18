import React, { useState, useEffect } from 'react';

interface Paw {
  id: number;
  x: number;
  y: number;
  color: string;
}

const PAW_COLORS = [
  '#8C52FF', '#FFEE88', '#00C2CB', // Secondary colors (Purple, Yellow, Light Blue)
  '#00CC99', '#E2006E', '#790438'  // Main colors (Green, Pink, Brown - excluding white for visibility)
];

const PawPrintAnimation: React.FC = () => {
  const [paws, setPaws] = useState<Paw[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add a paw print every fixed distance to create a path
      if (Math.random() > 0.6) { // More frequent spawns
        const newPaw: Paw = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          color: PAW_COLORS[Math.floor(Math.random() * PAW_COLORS.length)]
        };
        
        setPaws(prev => [...prev.slice(-15), newPaw]); // Keep last 15 paws
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaws(prev => prev.filter(paw => Date.now() - paw.id < 2000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999 }}>
      {paws.map(paw => (
        <div 
          key={paw.id}
          className="paw-print"
          style={{ 
            left: paw.x - 20, 
            top: paw.y - 20,
            fill: paw.color,
            color: paw.color
          }}
        >
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path d="M12,2A3,3,0,0,1,15,5C15,6.66,13.66,8,12,8S9,6.66,9,5A3,3,0,0,1,12,2M7,7A3,3,0,0,1,10,10A3,3,0,0,1,7,13A3,3,0,0,1,4,10A3,3,0,0,1,7,7M17,7A3,3,0,0,1,20,10A3,3,0,0,1,17,13A3,3,0,0,1,14,10A3,3,0,0,1,17,7M12,11A4,4,0,0,1,16,15C16,17.21,14.21,19,12,19S8,17.21,8,15A4,4,0,0,1,12,11M12,22A5,5,0,0,1,7,17H17A5,5,0,0,1,12,22Z" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PawPrintAnimation;
