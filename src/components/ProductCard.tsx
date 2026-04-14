import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="product-card__image"
        />
        {product.tag && (
          <div className="product-card__tag-container">
            <span className={`product-card__tag ${product.tag === 'Best Seller' ? 'product-card__tag--best-seller' : 'product-card__tag--new'}`}>
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
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
