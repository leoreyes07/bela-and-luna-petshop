import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import BedCard from '../components/BedCard';
import { BEDS, Product } from '../constants';
import './Beds.css';



export default function Beds() {
  const { cartCount, totalPrice, addToCart } = useCart();
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
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
