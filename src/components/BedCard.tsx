import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';
import './BedCard.css';

interface BedCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const BedCard: React.FC<BedCardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [added, setAdded] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
      setSelectedSize(''); // Reset after adding for consistency
    }
  };

  return (
    <div className="product-card bed-card">
      <div className="product-card__image-container bed-card__image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card__image bed-card__image" 
        />
        {product.tag && (
          <div className="product-card__tag-container">
            <span className={`product-card__tag ${product.tag === 'Best Seller' ? 'product-card__tag--best-seller' : product.tag === 'New Edition' ? 'product-card__tag--new-edition' : 'product-card__tag--most-popular'}`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>
      
      <div className="product-card__content bed-card__content">
        <div className="product-card__header bed-card__header">
          <div className="product-card__info bed-card__info">
            <h3 className="product-card__title bed-card__title">{product.name}</h3>
            <p className="product-card__desc bed-card__desc">{product.description}</p>
          </div>
          <span className="product-card__price bed-card__price">${product.price}</span>
        </div>

        <div className="bed-card__size-selector">
          <span className="bed-card__size-label">Select Size:</span>
          <div className="bed-card__size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`bed-card__size-btn ${selectedSize === size ? 'bed-card__size-btn--active' : ''}`}
                onClick={() => setSelectedSize(prev => prev === size ? '' : size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`button button--secondary product-card__add-btn bed-card__add-btn ${added ? 'bed-card__add-btn--added' : !selectedSize ? 'bed-card__add-btn--pending' : ''}`}
        >
          <ShoppingBag size={20} />
          {added ? 'Added! 🐾' : selectedSize ? 'Add to Cart' : 'Select a size'}
        </button>
      </div>
    </div>
  );
};

export default BedCard;
