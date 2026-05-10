import React from 'react';
import { ShoppingCart } from 'lucide-react';
import PetBowlCard from '../components/PetBowlCard';
import { BOWLS, Product } from '../constants';
import './PetBowls.css';

interface PetBowlsProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function PetBowls({ onAddToCart, onCheckout, cartCount, totalPrice }: PetBowlsProps) {
  return (
    <main className="pet-bowls">
      <section className="pet-bowls-hero">
        <div className="container">
          <div className="pet-bowls-hero__content">
            <div className="pet-bowls-hero__badge">Comida Fina</div>
            <h1 className="pet-bowls-hero__title">
              Colección Artesanal de Comederos
            </h1>
            <p className="pet-bowls-hero__text">
              Elegancia y funcionalidad para cada comida. Cerámicas sofisticadas y acero inoxidable duradero diseñados para el confort de tu mascota y el estilo de tu hogar.
            </p>
          </div>
        </div>
      </section>

      <section className="pet-bowls-gallery">
        <div className="container">
          <div className="product-grid">
            {BOWLS.map((bowl) => (
              <PetBowlCard
                key={bowl.id}
                product={bowl}
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
