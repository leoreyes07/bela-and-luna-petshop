import { Instagram, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">Bela & Luna Pet Shop</div>
          <p className="footer__tagline">
            En Bela & Luna Petshop, elegimos cuidadosamente cada accesorio para ofrecerte productos que destacan por su calidad, confort y estilo,<br />porque tu mascota merece lo mejor en cada detalle.
          </p>
        </div>
        
        <nav className="footer__links">
          <a href="#" className="footer__link">Privacidad</a>
          <a href="#" className="footer__link">Términos</a>
          <a href="#" className="footer__link">Envíos</a>
          <a href="#" className="footer__link">Devoluciones</a>
        </nav>

        <div className="footer__social">
          <a href="https://www.instagram.com/belaylunapetshop.ni?igsh=MW5sY2oyN3Z5bDNuaA==" target="_blank" rel="noopener noreferrer" className="footer__icon-circle">
            <Instagram size={16} />
          </a>
          <a href="https://www.facebook.com/share/1aSbF4XaCH/" target="_blank" rel="noopener noreferrer" className="footer__icon-circle">
            <Facebook size={16} />
          </a>
          <a href="https://www.tiktok.com/@belaylunapetshop.ni?_r=1&_t=ZS-96CHRDkWQD6" target="_blank" rel="noopener noreferrer" className="footer__icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
        
        <div className="footer__copyright">
          © 2026 PetShop Bela & Luna. Hecho con amor.
        </div>
      </div>
    </footer>
  );
}
