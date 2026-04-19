import { Instagram, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">Bela & Luna Pet Shop</div>
          <p className="footer__tagline">
            Elevating the lives of pets through thoughtful design and premium craftsmanship.
          </p>
        </div>
        
        <nav className="footer__links">
          <a href="#" className="footer__link">Privacy</a>
          <a href="#" className="footer__link">Terms</a>
          <a href="#" className="footer__link">Shipping</a>
          <a href="#" className="footer__link">Returns</a>
        </nav>

        <div className="footer__social">
          <div className="footer__icon-circle">
            <Instagram size={16} />
          </div>
          <div className="footer__icon-circle">
            <Facebook size={16} />
          </div>
          <div className="footer__icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </div>
        </div>
        
        <div className="footer__copyright">
          © 2026 PetShop Bela & Luna. Curated with love.
        </div>
      </div>
    </footer>
  );
}
