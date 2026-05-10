import React from 'react';
import { ShoppingCart } from 'lucide-react';
import BedCard from '../components/BedCard';
import { BEDS, Product } from '../constants';
import './Beds.css';

interface BedsProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Beds({ onAddToCart, onCheckout, cartCount, totalPrice }: BedsProps) {
  return (
    <main className="beds">
      <section className="beds-hero">
        <div className="container">
          <div className="beds-hero__content">
            <div className="beds-hero__badge">Sueño & Descanso</div>
            <h1 className="beds-hero__title">
              Camas de Lujo para Mascotas
            </h1>
            <p className="beds-hero__text">
              El máximo confort para tu amigo peludo. Soporte ortopédico, materiales lavables y diseños que complementan tu hogar.
            </p>
          </div>
        </div>
      </section>

      <section className="beds-gallery">
        <div className="container">
          <div className="product-grid">
            {BEDS.map((bed) => (
              <BedCard
                key={bed.id}
                product={bed}
                onAddToCart={onAddToCart}
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
