import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ProductCard.css';
import './PetBowlCard.css';

interface PetBowlCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const PetBowlCard: React.FC<PetBowlCardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [added, setAdded] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="product-card bowl-card">
      <div className="product-card__image-container bowl-card__image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`product-card__image bowl-card__image ${product.name.toLowerCase().includes('stainless') ? 'bowl-card__image--metal' : ''}`} 
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
      
      <div className="product-card__content bowl-card__content">
        <div className="product-card__header bowl-card__header">
          <div className="product-card__info bowl-card__info">
            <h3 className="product-card__title bowl-card__title">{product.name}</h3>
            <p className="product-card__desc bowl-card__desc">{product.description}</p>
          </div>
          <span className="product-card__price bowl-card__price">${product.price}</span>
        </div>

        <div className="bowl-card__size-selector">
          <span className="bowl-card__size-label">Elegir Talla:</span>
          <div className="bowl-card__size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`bowl-card__size-btn ${selectedSize === size ? 'bowl-card__size-btn--active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`button button--secondary product-card__add-btn bowl-card__add-btn ${added ? 'bowl-card__add-btn--added' : !selectedSize ? 'bowl-card__add-btn--pending' : ''}`}
        >
          <ShoppingBag size={20} />
          {added ? 'Agregado! 🐾' : selectedSize ? 'Agregar al Carrito' : 'Elige una Talla'}
        </button>
      </div>
    </div>
  );
};

export default PetBowlCard;
