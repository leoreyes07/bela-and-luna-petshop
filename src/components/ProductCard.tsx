import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onImageClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onImageClick }) => {
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
          className="product-card__image"
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
          <span className="product-card__price">${product.price}</span>
        </div>
        <button 
          onClick={() => onAddToCart(product)}
          className="button button--secondary product-card__add-btn"
        >
          <ShoppingBag size={20} />
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
