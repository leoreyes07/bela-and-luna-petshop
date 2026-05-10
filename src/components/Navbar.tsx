import { useState } from 'react';
import { ShoppingCart, ArrowLeft, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Navbar.css';


interface NavbarProps {
  onCartClick: () => void;
  onBackClick?: () => void;
  onNavigateHarnesses?: () => void;
  onNavigateCollars?: () => void;
  onNavigateToys?: () => void;
  onNavigateBeds?: () => void;
  onNavigateBowls?: () => void;
  onNavigateOthers?: () => void;
  currentView?: string;
  isCheckout?: boolean;
  cartCount: number;
}

export default function Navbar({ onCartClick, onBackClick, onNavigateHarnesses, onNavigateCollars, onNavigateToys, onNavigateBeds, onNavigateBowls, onNavigateOthers, currentView, isCheckout, cartCount }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
              <a href="#" className={`navbar__link ${currentView === 'home' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); onBackClick?.(); closeMenu(); }}>Inicio</a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'harnesses' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHarnesses?.();
                  closeMenu();
                }}
              >
                Arneses
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'collars' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateCollars?.();
                  closeMenu();
                }}
              >
                Collares
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'beds' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateBeds?.();
                  closeMenu();
                }}
              >
                Camas
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'bowls' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateBowls?.();
                  closeMenu();
                }}
              >
                Platos
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'toys' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToys?.();
                  closeMenu();
                }}
              >
                Juguetes
              </a>
              <a 
                href="#" 
                className={`navbar__link ${currentView === 'others' ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateOthers?.();
                  closeMenu();
                }}
              >
                Otros
              </a>
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
              <button 
                className="navbar__menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </>
        ) : (
          <button 
            onClick={onBackClick}
            className="navbar__back-btn"
          >
            <ArrowLeft size={20} />
            <span>Volver a la Tienda</span>
          </button>
        )}
      </div>
    </nav>
  );
}
