import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import TacticalHarnessCard from '../components/TacticalHarnessCard';
import { TACTICAL_HARNESSES, Product } from '../constants';
import './Harnesses.css';



export default function Harnesses() {
  const { cartCount, totalPrice, addToCart } = useCart();
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
              Hechos para la aventura, la seguridad y el máximo confort. Encontrá el ajuste perfecto para tu compañero.
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
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
