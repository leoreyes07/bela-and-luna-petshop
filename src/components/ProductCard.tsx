import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onImageClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onImageClick }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const availableSizes = product.pricesBySize ? Object.keys(product.pricesBySize) : [];
  const hasSizes = availableSizes.length > 0;

  const handleAddToCart = () => {
    if (hasSizes) {
      if (selectedSize) {
        onAddToCart(product, selectedSize);
        setSelectedSize('');
      }
    } else {
      onAddToCart(product, 'Único');
    }
  };

  let displayPrice = `C$${product.price}`;
  if (product.pricesBySize) {
    if (selectedSize) {
      displayPrice = `C$${product.pricesBySize[selectedSize]}`;
    } else {
      displayPrice = ''; // No mostrar nada hasta que elija talla
    }
  }

  return (
    <div className="product-card">
      <div 
        className="product-card__image-container"
        onClick={() => onImageClick && onImageClick(product)}
        style={{ cursor: onImageClick ? 'pointer' : 'default' }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`product-card__image ${product.imageFit === 'contain' ? 'product-card__image--contain' : ''}`}
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
      <div className="product-card__content">
        <div className="product-card__header">
          <div className="product-card__info">
            <h3 className="product-card__title">{product.name}</h3>
            <p className="product-card__desc">{product.description}</p>
          </div>
          <span className="product-card__price">{displayPrice}</span>
        </div>

        {hasSizes && (
          <div className="product-card__size-selector">
            <span className="product-card__size-label">Elegir Talla:</span>
            <div className="product-card__size-options">
              {availableSizes.map(size => (
                <button
                  key={size}
                  className={`product-card__size-btn ${selectedSize === size ? 'product-card__size-btn--active' : ''}`}
                  onClick={() => setSelectedSize(prev => prev === size ? '' : size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <button 
          onClick={handleAddToCart}
          className="button button--secondary product-card__add-btn"
        >
          <ShoppingBag size={20} />
          {hasSizes && !selectedSize ? 'Elige una talla' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
