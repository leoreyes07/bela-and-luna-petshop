import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import ToyCard from '../components/ToyCard';
import { TOYS, Product } from '../constants';
import './Toys.css';



export default function Toys() {
  const { cartCount, totalPrice, addToCart } = useCart();
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
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
