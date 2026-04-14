import React from 'react';
import * as Icons from 'lucide-react';
import './CategoryCard.css';

interface CategoryCardProps {
  name: string;
  iconName: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconName, onClick }) => {
  // @ts-ignore - Dynamic icon access
  const Icon = Icons[iconName] || Icons.HelpCircle;

  const getColorData = () => {
    switch (name.toLowerCase()) {
      case 'harnesses': return 'var(--color-green-rgb)';
      case 'collars': return 'var(--color-pink-rgb)';
      case 'beds': return 'var(--color-light-blue-rgb)';
      case 'bowls': return 'var(--color-purple-rgb)';
      case 'toys': return 'var(--color-green-rgb)';
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
          backgroundColor: `rgba(${rgbVar}, 0.2)` 
        }}
      >
        <Icon size={32} />
      </div>
      <span className="category-card__name">{name}</span>
    </div>
  );
};

export default CategoryCard;
