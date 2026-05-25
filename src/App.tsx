import { useState, useMemo, useEffect } from 'react';
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

type View = 'home' | 'checkout' | 'harnesses' | 'collars' | 'toys' | 'beds' | 'bowls' | 'others';

export default function App() {
  const [currentView, setCurrentView] = useState<View>(() => {
    const hash = window.location.hash.replace('#', '') as View;
    return ['home', 'checkout', 'harnesses', 'collars', 'toys', 'beds', 'bowls', 'others'].includes(hash) ? hash : 'home';
  });
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'checkout', 'harnesses', 'collars', 'toys', 'beds', 'bowls', 'others'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const cartCount = cart.length;
  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  const handleAddToCart = (product: Product, size: string = 'M') => {
    const price = product.pricesBySize ? (product.pricesBySize[size] || product.price) : product.price;
    setCart((prev) => [...prev, { product, size, price }]);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleCheckout = () => {
    window.location.hash = 'checkout';
    window.scrollTo(0, 0);
  };

  const handleBackToShop = () => {
    window.location.hash = 'home';
    window.scrollTo(0, 0);
  };

  const navigate = (view: View) => {
    window.location.hash = view;
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      <PawPrintAnimation />
      <Navbar 
        onCartClick={handleCheckout} 
        onBackClick={handleBackToShop}
        onNavigateHarnesses={() => navigate('harnesses')}
        onNavigateCollars={() => navigate('collars')}
        onNavigateToys={() => navigate('toys')}
        onNavigateBeds={() => navigate('beds')}
        onNavigateBowls={() => navigate('bowls')}
        onNavigateOthers={() => navigate('others')}
        currentView={currentView}
        isCheckout={currentView === 'checkout'}
        cartCount={cartCount}
      />
      
      <div className="app-main">
        {currentView === 'home' ? (
          <Home 
            onAddToCart={handleAddToCart} 
            onCheckout={handleCheckout}
            onNavigateHarnesses={() => navigate('harnesses')}
            onNavigateCollars={() => navigate('collars')}
            onNavigateToys={() => navigate('toys')}
            onNavigateBeds={() => navigate('beds')}
            onNavigateBowls={() => navigate('bowls')}
            onNavigateOthers={() => navigate('others')}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'harnesses' ? (
          <Harnesses 
            onAddToCart={handleAddToCart} 
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'collars' ? (
          <Collars 
            onAddToCart={handleAddToCart} 
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'toys' ? (
          <Toys
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'beds' ? (
          <Beds
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'bowls' ? (
          <PetBowls
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : currentView === 'others' ? (
          <Others
            onAddToCart={handleAddToCart}
            onCheckout={handleCheckout}
            cartCount={cartCount}
            totalPrice={totalPrice}
          />
        ) : (
          <Checkout 
            cart={cart} 
            totalPrice={totalPrice} 
            onRemoveItem={handleRemoveFromCart}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
