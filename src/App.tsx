import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Checkout from './views/Checkout';
import PawPrintAnimation from './components/PawPrintAnimation';
import Harnesses from './views/Harnesses';
import Collars from './views/Collars';
import Toys from './views/Toys';
import Beds from './views/Beds';
import PetBowls from './views/PetBowls';
import Others from './views/Others';
import { Product, CartItemType } from './constants';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount, totalPrice } = useCart();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="app-container">
      <PawPrintAnimation />
      <Navbar isCheckout={isCheckout} />
      
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harnesses" element={<Harnesses />} />
          <Route path="/collars" element={<Collars />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/bowls" element={<PetBowls />} />
          <Route path="/others" element={<Others />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      {!isCheckout && cartCount > 0 && (
        <div className="floating-cart">
          <button 
            onClick={() => navigate('/checkout')}
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

      <Footer />
    </div>
  );
}
