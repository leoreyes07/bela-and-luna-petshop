import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';
import './TacticalHarnessCard.css';

interface TacticalHarnessCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const SIZES = ['S', 'M', 'L', 'XL'];

const TacticalHarnessCard: React.FC<TacticalHarnessCardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setSelectedSize(''); // Reset after adding to cart
    }
  };

  const availableSizes = product.pricesBySize ? Object.keys(product.pricesBySize) : SIZES;
  
  let displayPrice = `C$${product.price}`;
  if (product.pricesBySize) {
    if (selectedSize) {
      displayPrice = `C$${product.pricesBySize[selectedSize]}`;
    } else {
      const prices = Object.values(product.pricesBySize) as number[];
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      displayPrice = min === max ? `C$${min}` : `C$${min} - C$${max}`;
    }
  }

  return (
    <div className="product-card tac-card">
      <div className="product-card__image-container tac-card__image-container">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="product-card__image tac-card__image"
          loading="lazy"
        />
        {product.tag && (
          <div className="product-card__tag-container">
            <span className={`product-card__tag ${product.tag === 'Más Vendido' ? 'product-card__tag--best-seller' : product.tag === 'Nueva Edición' ? 'product-card__tag--new-edition' : 'product-card__tag--most-popular'}`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>
      <div className="product-card__content tac-card__content">
        <div className="product-card__header tac-card__header">
          <div className="product-card__info tac-card__info">
            <h3 className="product-card__title tac-card__title">{product.name}</h3>
            <p className="product-card__desc tac-card__desc">{product.description}</p>
          </div>
          <span className="product-card__price tac-card__price">{displayPrice}</span>
        </div>
        
        <div className="tac-card__size-selector">
          <span className="tac-card__size-label">Elegir Talla:</span>
          <div className="tac-card__size-options">
            {availableSizes.map(size => (
              <button 
                key={size}
                className={`tac-card__size-btn ${selectedSize === size ? 'tac-card__size-btn--active' : ''}`}
                onClick={() => setSelectedSize(prev => prev === size ? '' : size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className={`button button--secondary product-card__add-btn tac-card__add-btn ${!selectedSize ? 'tac-card__add-btn--disabled' : ''}`}
        >
          <ShoppingBag size={20} />
          {selectedSize ? 'Agregar al Carrito' : 'Elige una Talla'}
        </button>
      </div>
    </div>
  );
};

export default TacticalHarnessCard;
