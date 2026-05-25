import fs from 'fs';
import path from 'path';

// 1. Refactor main.tsx
const mainPath = path.resolve(process.cwd(), 'src/main.tsx');
let mainCode = fs.readFileSync(mainPath, 'utf8');
if (!mainCode.includes('BrowserRouter')) {
  mainCode = mainCode.replace(/import \{ CartProvider \} from '\.\/contexts\/CartContext';/, "import { CartProvider } from './contexts/CartContext';\nimport { BrowserRouter } from 'react-router-dom';");
  mainCode = mainCode.replace(/<CartProvider>/, "<BrowserRouter>\n      <CartProvider>");
  mainCode = mainCode.replace(/<\/CartProvider>/, "</CartProvider>\n    </BrowserRouter>");
  fs.writeFileSync(mainPath, mainCode);
}
console.log('main.tsx updated');

// 2. Refactor Navbar.tsx
const navbarPath = path.resolve(process.cwd(), 'src/components/Navbar.tsx');
let navbarCode = fs.readFileSync(navbarPath, 'utf8');
navbarCode = navbarCode.replace(/import \{ ShoppingCart, Menu, X, PawPrint \} from 'lucide-react';/, "import { ShoppingCart, Menu, X, PawPrint } from 'lucide-react';\nimport { Link } from 'react-router-dom';");
// Remove props interface contents
navbarCode = navbarCode.replace(/interface NavbarProps \{[\s\S]*?\}/, 'interface NavbarProps {\n  currentView?: string;\n  isCheckout?: boolean;\n}');
navbarCode = navbarCode.replace(/export default function Navbar\(\{.*?\}\s*:\s*NavbarProps\)\s*\{/, "export default function Navbar({ currentView, isCheckout }: NavbarProps) {");
// Replace buttons with Links in desktop nav
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateHarnesses\}>Arneses<\/button>/g, '<Link to="/harnesses" className="nav__link">Arneses</Link>');
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateCollars\}>Collares<\/button>/g, '<Link to="/collars" className="nav__link">Collares</Link>');
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateToys\}>Juguetes<\/button>/g, '<Link to="/toys" className="nav__link">Juguetes</Link>');
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateBeds\}>Camas<\/button>/g, '<Link to="/beds" className="nav__link">Camas</Link>');
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateBowls\}>Platos<\/button>/g, '<Link to="/bowls" className="nav__link">Platos</Link>');
navbarCode = navbarCode.replace(/<button className="nav__link".*?onClick=\{onNavigateOthers\}>Otros<\/button>/g, '<Link to="/others" className="nav__link">Otros</Link>');
// Mobile nav links
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Arneses\s*<\/button>/g, '<Link to="/harnesses" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Arneses</Link>');
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Collares\s*<\/button>/g, '<Link to="/collars" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Collares</Link>');
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Juguetes\s*<\/button>/g, '<Link to="/toys" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Juguetes</Link>');
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Camas\s*<\/button>/g, '<Link to="/beds" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Camas</Link>');
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Platos\s*<\/button>/g, '<Link to="/bowls" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Platos</Link>');
navbarCode = navbarCode.replace(/<button className="nav-mobile__link".*?onClick=\{.*?\}\s*>\s*Otros\s*<\/button>/g, '<Link to="/others" className="nav-mobile__link" onClick={() => setIsMenuOpen(false)}>Otros</Link>');

// Replace Logo button with Link
navbarCode = navbarCode.replace(/<button className="nav__logo" onClick=\{onBackClick\}>/, '<Link to="/" className="nav__logo">');
navbarCode = navbarCode.replace(/<\/button>\s*<div className="nav__links">/, '</Link>\n        <div className="nav__links">');
// Note: we just safely replace the button end tag corresponding to nav__logo by looking for nav__links

// Replace cart button with Link
navbarCode = navbarCode.replace(/<button\s*className="nav__cart"\s*onClick=\{isCheckout \? onBackClick : onCartClick\}\s*>/, '<Link to={isCheckout ? "/" : "/checkout"} className="nav__cart">');
navbarCode = navbarCode.replace(/<\/button>\s*<button className="nav__mobile-btn"/, '</Link>\n        <button className="nav__mobile-btn"');

fs.writeFileSync(navbarPath, navbarCode);
console.log('Navbar.tsx updated');

// 3. Refactor category views (remove floating cart and props)
const viewsDir = path.resolve(process.cwd(), 'src/views');
const categoryViews = ['Harnesses.tsx', 'Collars.tsx', 'Toys.tsx', 'Beds.tsx', 'PetBowls.tsx', 'Others.tsx'];
for (const view of categoryViews) {
  const viewPath = path.join(viewsDir, view);
  let code = fs.readFileSync(viewPath, 'utf8');
  // Remove props
  code = code.replace(/interface [A-Za-z]+Props \{\s*onCheckout: \(\) => void;\s*\}/, '');
  code = code.replace(/(export default function [A-Za-z]+)\(\{ onCheckout \}: [A-Za-z]+Props\)/, '$1()');
  // Remove floating cart
  code = code.replace(/\{\/\* Floating Cart \*\/\}.*?<\/div>\s*\)\}/s, '');
  // Remove unused lucide-react if only ShoppingCart was there
  // Actually let's just let TS tell us if there are unused, or remove ShoppingCart
  code = code.replace(/import \{ ShoppingCart \} from 'lucide-react';\n/, '');
  fs.writeFileSync(viewPath, code);
  console.log(`${view} updated`);
}

// 4. Refactor Home.tsx
const homePath = path.join(viewsDir, 'Home.tsx');
let homeCode = fs.readFileSync(homePath, 'utf8');
homeCode = homeCode.replace(/import \{ useCart \} from '\.\.\/contexts\/CartContext';/, "import { useCart } from '../contexts/CartContext';\nimport { useNavigate } from 'react-router-dom';");
homeCode = homeCode.replace(/interface HomeProps \{[\s\S]*?\}/, '');
homeCode = homeCode.replace(/export default function Home\(\{.*?\}\s*:\s*HomeProps\)\s*\{/, 'export default function Home() {');
homeCode = homeCode.replace(/const \{ cartCount, totalPrice, addToCart \} = useCart\(\);/, "const { cartCount, totalPrice, addToCart } = useCart();\n  const navigate = useNavigate();");
// Replace onNavigate calls with navigate('/path')
homeCode = homeCode.replace(/onNavigateHarnesses/g, "() => navigate('/harnesses')");
homeCode = homeCode.replace(/onNavigateCollars/g, "() => navigate('/collars')");
homeCode = homeCode.replace(/onNavigateToys/g, "() => navigate('/toys')");
homeCode = homeCode.replace(/onNavigateBeds/g, "() => navigate('/beds')");
homeCode = homeCode.replace(/onNavigateBowls/g, "() => navigate('/bowls')");
homeCode = homeCode.replace(/onNavigateOthers/g, "() => navigate('/others')");
// Wait, CategoryCard onClick gets () => navigate('...'). But `onNavigateHarnesses` was already a function. So replacing it with `() => navigate('/harnesses')` works!
// Wait, earlier I had `onClick={onNavigateHarnesses}` so it becomes `onClick={() => navigate('/harnesses')}`. This is perfect.
// Wait, what if it was `cat.name === 'Arneses' ? onNavigateHarnesses`? It becomes `cat.name === 'Arneses' ? () => navigate('/harnesses')`. Perfect.
// Remove floating cart from Home
homeCode = homeCode.replace(/\{\/\* Floating Cart \*\/\}.*?<\/div>\s*\)\}/s, '');
fs.writeFileSync(homePath, homeCode);
console.log('Home.tsx updated');

// 5. Refactor App.tsx
const appPath = path.resolve(process.cwd(), 'src/App.tsx');
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/import \{ useState, useMemo, useEffect \} from 'react';/, "import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';\nimport { useCart } from './contexts/CartContext';\nimport { ShoppingCart } from 'lucide-react';");
// Replace App function
const appCodeNew = `export default function App() {
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
              Pagar • C\${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
`;
appCode = appCode.replace(/type View =.*?export default function App\(\) \{[\s\S]*\}\n/s, appCodeNew);
fs.writeFileSync(appPath, appCode);
console.log('App.tsx updated');
