import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import PetBowlCard from '../components/PetBowlCard';
import { BOWLS, Product } from '../constants';
import './PetBowls.css';



export default function PetBowls() {
  const { cartCount, totalPrice, addToCart } = useCart();
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
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
