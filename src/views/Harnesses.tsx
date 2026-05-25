import { ShoppingCart } from 'lucide-react';
import TacticalHarnessCard from '../components/TacticalHarnessCard';
import { TACTICAL_HARNESSES, Product } from '../constants';
import './Harnesses.css';

interface HarnessesProps {
  onAddToCart: (product: Product, size: string) => void;
  onCheckout: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Harnesses({ onAddToCart, onCheckout, cartCount, totalPrice }: HarnessesProps) {
  return (
    <main className="harnesses">
      <section className="harnesses-hero">
        <div className="container">
          <div className="harnesses-hero__content">
            <div className="harnesses-hero__badge">Táctico & Premium</div>
            <h1 className="harnesses-hero__title">
              Arneses Tácticos para Perros
            </h1>
            <p className="harnesses-hero__text">
              Hechos para la aventura, la seguridad y el máximo confort. Encontrá el ajuste perfecto para tu compañero K-9.
            </p>
          </div>
        </div>
      </section>

      <section className="harnesses-gallery">
        <div className="container">
          <div className="product-grid">
            {TACTICAL_HARNESSES.map((product) => (
              <TacticalHarnessCard 
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
              Pagar • C${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
