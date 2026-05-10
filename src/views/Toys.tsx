import { ShoppingCart } from 'lucide-react';
import ToyCard from '../components/ToyCard';
import { TOYS, Product } from '../constants';
import './Toys.css';

interface ToysProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Toys({ onAddToCart, onCheckout, cartCount, totalPrice }: ToysProps) {
  return (
    <main className="toys">
      <section className="toys-hero">
        <div className="container">
          <div className="toys-hero__content">
            <div className="toys-hero__badge">Juego & Diversión</div>
            <h1 className="toys-hero__title">
              Colección de Juguetes para Mascotas
            </h1>
            <p className="toys-hero__text">
              Estimulá la mente de tu mejor amigo con nuestra colección de juguetes interactivos. Diseñados para entretener, desafiar y recompensar.
            </p>
          </div>
        </div>
      </section>

      <section className="toys-gallery">
        <div className="container">
          <div className="product-grid">
            {TOYS.map((product) => (
              <ToyCard
                key={product.id}
                product={product}
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
