import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../constants';
import './ToyCard.css';

interface ToyCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

const ToyCard: React.FC<ToyCardProps> = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, 'Único');
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="toy-card">
      <div className="toy-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="toy-card__image"
          loading="lazy"
        />
        {product.tag && (
          <div className="toy-card__tag-container">
            <span className={`toy-card__tag ${product.tag === 'Más Vendido' ? 'toy-card__tag--best-seller' : 'toy-card__tag--new'}`}>
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="toy-card__content">
        <div className="toy-card__header">
          <div className="toy-card__info">
            <h3 className="toy-card__title">{product.name}</h3>
            <p className="toy-card__desc">{product.description}</p>
          </div>
          <span className="toy-card__price">C${product.price}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`button toy-card__add-btn ${added ? 'toy-card__add-btn--added' : 'button--secondary'}`}
        >
          <ShoppingBag size={20} />
          {added ? 'Agregado! 🐾' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
