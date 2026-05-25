import fs from 'fs';
import path from 'path';

// Refactor App.tsx
const appPath = path.resolve(process.cwd(), 'src/App.tsx');
let appCode = fs.readFileSync(appPath, 'utf8');

// Remove state and constants imports related to cart
appCode = appCode.replace(/import \{ Product, CartItemType \} from '\.\/constants';\n/, '');
// Remove cart state and logic
appCode = appCode.replace(/  const \[cart, setCart\] = useState<CartItemType\[\]>\(\[\]\);\n\n(.*?)\n  const handleCheckout/s, '  const handleCheckout');
// Remove props from Home
appCode = appCode.replace(/            onAddToCart=\{handleAddToCart\} \n/g, '');
appCode = appCode.replace(/            cartCount=\{cartCount\}\n            totalPrice=\{totalPrice\}\n/g, '');
// Remove props from categories
appCode = appCode.replace(/            onAddToCart=\{handleAddToCart\} \n            onCheckout=\{handleCheckout\}\n            cartCount=\{cartCount\}\n            totalPrice=\{totalPrice\}/g, '            onCheckout={handleCheckout}');
// Remove props from Checkout
appCode = appCode.replace(/            cart=\{cart\} \n            totalPrice=\{totalPrice\} \n            onRemoveItem=\{handleRemoveFromCart\}\n/g, '');
// Remove props from Navbar
appCode = appCode.replace(/        cartCount=\{cartCount\}\n/g, '');
// Wait, I might have messed up the exact string match for Checkout. Let's do a more robust replace for Checkout props:
appCode = appCode.replace(/<Checkout[\s\S]*?\/>/, '<Checkout />');

fs.writeFileSync(appPath, appCode);
console.log('App.tsx refactored');

// Refactor Views
const viewsDir = path.resolve(process.cwd(), 'src/views');
const views = fs.readdirSync(viewsDir);

for (const view of views) {
  if (!view.endsWith('.tsx')) continue;
  const viewPath = path.join(viewsDir, view);
  let viewCode = fs.readFileSync(viewPath, 'utf8');

  // Add import for useCart
  if (!viewCode.includes('useCart')) {
    viewCode = viewCode.replace(/import (.*?) from 'react';/, "import $1 from 'react';\nimport { useCart } from '../contexts/CartContext';");
    if (!viewCode.includes('useCart')) {
       // fallback if no react import
       viewCode = `import { useCart } from '../contexts/CartContext';\n` + viewCode;
    }
  }

  if (view === 'Checkout.tsx') {
    // Remove props interface
    viewCode = viewCode.replace(/interface CheckoutProps \{[\s\S]*?\}/, '');
    viewCode = viewCode.replace(/export default function Checkout\(\{.*?\}[:,]\s*CheckoutProps\)/, 'export default function Checkout()');
    // Inject useCart
    viewCode = viewCode.replace(/export default function Checkout\(\) \{\n/, "export default function Checkout() {\n  const { cart, totalPrice, removeFromCart } = useCart();\n");
    // Replace onRemoveItem with removeFromCart
    viewCode = viewCode.replace(/onRemoveItem/g, 'removeFromCart');
  } else if (view === 'Home.tsx') {
    viewCode = viewCode.replace(/interface HomeProps \{[\s\S]*?\}/, 'interface HomeProps {\n  onCheckout: () => void;\n  onNavigateHarnesses: () => void;\n  onNavigateCollars: () => void;\n  onNavigateToys: () => void;\n  onNavigateBeds: () => void;\n  onNavigateBowls: () => void;\n  onNavigateOthers: () => void;\n}');
    viewCode = viewCode.replace(/export default function Home\(\{.*?\}\s*:\s*HomeProps\)\s*\{/, 'export default function Home({ onCheckout, onNavigateHarnesses, onNavigateCollars, onNavigateToys, onNavigateBeds, onNavigateBowls, onNavigateOthers }: HomeProps) {');
    viewCode = viewCode.replace(/export default function Home\(\{.*?\}\)\s*\{/, 'export default function Home({ onCheckout, onNavigateHarnesses, onNavigateCollars, onNavigateToys, onNavigateBeds, onNavigateBowls, onNavigateOthers }) {');
    // Inject useCart
    viewCode = viewCode.replace(/export default function Home\(\{.*?\}\)\s*\{\n/, "export default function Home({ onCheckout, onNavigateHarnesses, onNavigateCollars, onNavigateToys, onNavigateBeds, onNavigateBowls, onNavigateOthers }: HomeProps) {\n  const { cartCount, totalPrice, addToCart } = useCart();\n");
    viewCode = viewCode.replace(/onAddToCart/g, 'addToCart');
  } else {
    // Category views
    const viewName = view.replace('.tsx', '');
    viewCode = viewCode.replace(new RegExp(`interface ${viewName}Props \\{[\\s\\S]*?\\}`), `interface ${viewName}Props {\n  onCheckout: () => void;\n}`);
    viewCode = viewCode.replace(new RegExp(`export default function ${viewName}\\(.*?\\s*:\\s*${viewName}Props\\)\\s*\\{`), `export default function ${viewName}({ onCheckout }: ${viewName}Props) {`);
    // Inject useCart
    viewCode = viewCode.replace(new RegExp(`export default function ${viewName}\\(\\{.*?\\}\\s*:\\s*${viewName}Props\\)\\s*\\{\\n`), `export default function ${viewName}({ onCheckout }: ${viewName}Props) {\n  const { cartCount, totalPrice, addToCart } = useCart();\n`);
    viewCode = viewCode.replace(/onAddToCart/g, 'addToCart');
  }

  fs.writeFileSync(viewPath, viewCode);
  console.log(`${view} refactored`);
}

// Refactor Navbar
const navbarPath = path.resolve(process.cwd(), 'src/components/Navbar.tsx');
let navbarCode = fs.readFileSync(navbarPath, 'utf8');
if (!navbarCode.includes('useCart')) {
  navbarCode = `import { useCart } from '../contexts/CartContext';\n` + navbarCode;
}
navbarCode = navbarCode.replace(/cartCount:\s*number;/, '');
navbarCode = navbarCode.replace(/cartCount,/, '');
navbarCode = navbarCode.replace(/export default function Navbar\(\{(.*?)\}: NavbarProps\) \{/, "export default function Navbar({$1}: NavbarProps) {\n  const { cartCount } = useCart();\n");
// Fix any dangling commas from removing cartCount,
navbarCode = navbarCode.replace(/,\s*\}: NavbarProps/, ' }: NavbarProps');
fs.writeFileSync(navbarPath, navbarCode);
console.log('Navbar refactored');
