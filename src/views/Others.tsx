import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { OTHERS, Product } from '../constants';
import './Others.css';



export default function Others() {
  const { cartCount, totalPrice, addToCart } = useCart();
  return (
    <main className="others">
      <section className="others-hero">
        <div className="container">
          <div className="others-hero__content">
            <div className="others-hero__badge">Diversión & Accesorios</div>
            <h1 className="others-hero__title">
              Sorpresas Especiales & Más
            </h1>
            <p className="others-hero__text">
              Descubrí accesorios divertidos, kits de cumpleaños y artículos únicos para hacer cada momento con tu mascota inolvidable.
            </p>
          </div>
        </div>
      </section>

      <section className="others-gallery">
        <div className="container">
          <div className="product-grid">
            {OTHERS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(prod) => addToCart(prod, 'Único')}
              />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
