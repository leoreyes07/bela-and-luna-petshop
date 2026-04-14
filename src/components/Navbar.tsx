import { ShoppingCart, ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Navbar.css';


interface NavbarProps {
  onCartClick: () => void;
  onBackClick?: () => void;
  onNavigateHarnesses?: () => void;
  onNavigateCollars?: () => void;
  currentView?: string;
  isCheckout?: boolean;
  cartCount: number;
}

export default function Navbar({ onCartClick, onBackClick, onNavigateHarnesses, onNavigateCollars, currentView, isCheckout, cartCount }: NavbarProps) {
  return (
    <nav className={`navbar ${isCheckout ? 'navbar--checkout' : ''}`}>
      <div className="navbar__container">
        <div 
          className="navbar__logo"
          onClick={() => onBackClick?.()}
        >
          <img src={logo} alt="Bela & Luna" className="navbar__logo-img" />
        </div>
        
        {!isCheckout ? (
          <>
            <div className="navbar__links">
              <a href="#" className={`navbar__link ${currentView === 'home' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); onBackClick?.() }}>Home</a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'harnesses' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHarnesses?.();
                }}
              >
                Harnesses
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'collars' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateCollars?.();
                }}
              >
                Collars
              </a>
              <a href="#" className="navbar__link">Beds</a>
              <a href="#" className="navbar__link">Pet Bowls</a>
              <a href="#" className="navbar__link">Toys</a>
              <a href="#" className="navbar__link">Others</a>
            </div>
            <div className="navbar__actions">
              <button 
                onClick={onCartClick}
                className="navbar__cart-btn"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="navbar__cart-count">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </>
        ) : (
          <button 
            onClick={onBackClick}
            className="navbar__back-btn"
          >
            <ArrowLeft size={20} />
            <span>Back to Shop</span>
          </button>
        )}
      </div>
    </nav>
  );
}
