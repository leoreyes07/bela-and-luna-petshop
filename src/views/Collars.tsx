import { ShoppingCart } from 'lucide-react';
import CollarCard from '../components/CollarCard';
import { COLLARS, Product } from '../constants';
import './Collars.css';

interface CollarsProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Collars({ onAddToCart, onCheckout, cartCount, totalPrice }: CollarsProps) {
  return (
    <main className="collars">
      <section className="collars-hero">
        <div className="container">
          <div className="collars-hero__content">
            <div className="collars-hero__badge">Estampados & Originales</div>
            <h1 className="collars-hero__title">
              Colección de Collares para Perros
            </h1>
            <p className="collars-hero__text">
              Únicos, resistentes y llenos de color. Encontrá el collar perfecto que refleje la personalidad de tu mascota.
            </p>
          </div>
        </div>
      </section>

      <section className="collars-gallery">
        <div className="container">
          <div className="product-grid">
            {COLLARS.map((product) => (
              <CollarCard
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
