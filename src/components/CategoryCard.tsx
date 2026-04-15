import React from 'react';
import * as Icons from 'lucide-react';
import TeddyBearIcon from './icons/TeddyBearIcon';
import './CategoryCard.css';

interface CategoryCardProps {
  name: string;
  iconName: string;
  onClick?: () => void;
}

const CUSTOM_ICONS: Record<string, React.FC<{ size?: number; color?: string }>> = {
  TeddyBear: TeddyBearIcon,
};

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconName, onClick }) => {
  const CustomIcon = CUSTOM_ICONS[iconName];
  // @ts-ignore - Dynamic icon access
  const LucideIcon = Icons[iconName] || Icons.HelpCircle;

  const getColorData = () => {
    switch (name.toLowerCase()) {
      case 'harnesses': return 'var(--color-green-rgb)';
      case 'collars': return 'var(--color-pink-rgb)';
      case 'beds': return 'var(--color-light-blue-rgb)';
      case 'bowls': return 'var(--color-purple-rgb)';
      case 'toys': return 'var(--color-yellow-rgb, 255, 200, 0)';
      default: return 'var(--color-pink-rgb)';
    }
  };

  const rgbVar = getColorData();

  return (
    <div 
      className={`category-card ${onClick ? 'category-card--clickable' : ''}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <div 
        className="category-card__icon-container"
        style={{ 
          color: `rgb(${rgbVar})`, 
          backgroundColor: `rgba(${rgbVar}, 0.18)` 
        }}
      >
        {CustomIcon
          ? <CustomIcon size={32} color={`rgb(${rgbVar})`} />
          : <LucideIcon size={32} />
        }
      </div>
      <span className="category-card__name">{name}</span>
    </div>
  );
};

export default CategoryCard;
