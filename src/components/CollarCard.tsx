import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';
import './CollarCard.css';

interface CollarCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const SIZES = ['S', 'M', 'L', 'XL'];

const CollarCard: React.FC<CollarCardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setSelectedSize('');
    }
  };

  return (
    <div className="product-card collar-card">
      <div className="product-card__image-container collar-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image collar-card__image"
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
      <div className="product-card__content collar-card__content">
        <div className="product-card__header collar-card__header">
          <div className="product-card__info collar-card__info">
            <h3 className="product-card__title collar-card__title">{product.name}</h3>
            <p className="product-card__desc collar-card__desc">{product.description}</p>
          </div>
          <span className="product-card__price collar-card__price">C${product.price}</span>
        </div>

        <div className="collar-card__size-selector">
          <span className="collar-card__size-label">Elegir Talla:</span>
          <div className="collar-card__size-options">
            {SIZES.map(size => (
              <button
                key={size}
                className={`collar-card__size-btn ${selectedSize === size ? 'collar-card__size-btn--active' : ''}`}
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
          className={`button button--secondary product-card__add-btn collar-card__add-btn ${!selectedSize ? 'collar-card__add-btn--disabled' : ''}`}
        >
          <ShoppingBag size={20} />
          {selectedSize ? 'Agregar al Carrito' : 'Elige una Talla'}
        </button>
      </div>
    </div>
  );
};

export default CollarCard;
