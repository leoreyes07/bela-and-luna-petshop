import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { OTHERS, Product } from '../constants';
import './Others.css';

interface OthersProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Others({ onAddToCart, onCheckout, cartCount, totalPrice }: OthersProps) {
  return (
    <main className="others">
      <section className="others-hero">
        <div className="container">
          <div className="others-hero__content">
            <div className="others-hero__badge">Diversión & Accesorios</div>
            <h1 className="others-hero__title">
              Sorpresas Especiales & Más
            </h1>
            <p className="others-hero__text">
              Descubrí accesorios divertidos, kits de cumpleaños y artículos únicos para hacer cada momento con tu mascota inolvidable.
            </p>
          </div>
        </div>
      </section>

      <section className="others-gallery">
        <div className="container">
          <div className="product-grid">
            {OTHERS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(prod) => onAddToCart(prod, 'Único')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="floating-cart">
          <button
            onClick={onCheckout}
            className="floating-cart__btn"
          >
            <div className="floating-cart__icon-wrapper">
              <ShoppingCart size={24} />
              <span className="floating-cart__count">{cartCount}</span>
            </div>
            <span className="floating-cart__label">
              Pagar • ${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
