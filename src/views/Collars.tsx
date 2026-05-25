import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import CollarCard from '../components/CollarCard';
import { COLLARS, Product } from '../constants';
import './Collars.css';



export default function Collars() {
  const { cartCount, totalPrice, addToCart } = useCart();
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
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
