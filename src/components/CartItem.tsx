import React from 'react';
import { CartItemType } from '../constants';
import { X } from 'lucide-react';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  const { product, size, price } = item;
  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          referrerPolicy="no-referrer"
          className="cart-item__image" 
          loading="lazy"
        />
      </div>
      <div className="cart-item__info">
        <h3 className="cart-item__name">{product.name}</h3>
        <p className="cart-item__desc">{product.description}</p>
        <p className="cart-item__size">Talla: <strong>{size}</strong></p>
        <p className="cart-item__price">C${price.toFixed(2)}</p>
      </div>
      <div className="cart-item__actions">
        <span className="cart-item__qty-text">Cant. 1</span>
        {onRemove && (
          <button className="cart-item__remove" onClick={onRemove} aria-label="Eliminar producto">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
