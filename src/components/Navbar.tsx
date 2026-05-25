import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { ShoppingCart, ArrowLeft, Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const isCheckout = location.pathname === '/checkout';

  return (
    <nav className={`navbar ${isCheckout ? 'navbar--checkout' : ''}`}>
      <div className="navbar__container">
        <Link 
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="Bela & Luna" className="navbar__logo-img" />
        </Link>
        
        {!isCheckout ? (
          <>
            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
              <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Inicio</Link>
              <Link to="/harnesses" className={`navbar__link ${location.pathname === '/harnesses' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Arneses</Link>
              <Link to="/collars" className={`navbar__link ${location.pathname === '/collars' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Collares</Link>
              <Link to="/beds" className={`navbar__link ${location.pathname === '/beds' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Camas</Link>
              <Link to="/bowls" className={`navbar__link ${location.pathname === '/bowls' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Platos</Link>
              <Link to="/toys" className={`navbar__link ${location.pathname === '/toys' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Juguetes</Link>
              <Link to="/others" className={`navbar__link ${location.pathname === '/others' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>Otros</Link>
            </div>
            <div className="navbar__actions">
              <Link 
                to="/checkout"
                className="navbar__cart-btn"
                onClick={closeMenu}
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="navbar__cart-count">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button 
                className="navbar__menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </>
        ) : (
          <Link 
            to="/"
            className="navbar__back-btn"
          >
            <ArrowLeft size={20} />
            <span>Volver a la Tienda</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
