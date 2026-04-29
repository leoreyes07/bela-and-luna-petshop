import { ArrowRight, Dog, Leaf, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { PRODUCTS, CATEGORIES, Product } from '../constants';
import heroDogs from '../assets/hero-dogs.jpg';
import './Home.css';

interface HomeProps {
  onAddToCart: (product: Product, size?: string) => void;
  onCheckout: () => void;
  onNavigateHarnesses: () => void;
  onNavigateCollars: () => void;
  onNavigateToys: () => void;
  onNavigateBeds: () => void;
  onNavigateBowls: () => void;
  onNavigateOthers: () => void;
  cartCount: number;
  totalPrice: number;
}

export default function Home({ onAddToCart, onCheckout, onNavigateHarnesses, onNavigateCollars, onNavigateToys, onNavigateBeds, onNavigateBowls, onNavigateOthers, cartCount, totalPrice }: HomeProps) {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              Premium Pet Essentials
            </div>
            <h1 className="hero__title">
              Curating Joy <br />
              <span className="hero__title--highlight">for Every Tail.</span>
            </h1>
            <p className="hero__text">
              Thoughtfully designed essentials for your best friend. Because every wag and purr deserves the finest editorial quality.
            </p>
            <div className="hero__actions">
              <button className="button button--primary hero__btn" onClick={onNavigateHarnesses}>
                Shop the Collection
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__image-wrapper hero__image-wrapper--main">
              <img 
                src={heroDogs} 
                alt="Two happy dogs" 
              />
            </div>
          </div>
        </div>
        
        {/* Background Decorations */}
        <div className="hero__decoration hero__decoration--dog">
          <Dog size={120} />
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-section__header">
            <div className="categories-section__title-group">
              <h2 className="categories-section__title">Browse by Category</h2>
            </div>
            <p className="categories-section__subtitle">Find exactly what your companion needs.</p>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <CategoryCard 
                key={cat.name} 
                name={cat.name} 
                iconName={cat.icon} 
                onClick={
                  cat.name === 'Harnesses' ? onNavigateHarnesses
                  : cat.name === 'Collars' ? onNavigateCollars
                  : cat.name === 'Toys' ? onNavigateToys
                  : cat.name === 'Beds' ? onNavigateBeds
                  : cat.name === 'Bowls' ? onNavigateBowls
                  : cat.name === 'Others' ? onNavigateOthers
                  : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="product-gallery">
        <div className="container">
          <div className="product-gallery__filters no-scrollbar">
            <button className="filter-chip filter-chip--active">All Harnesses</button>
            <button className="filter-chip" onClick={onNavigateHarnesses}>Adventure Series</button>
            <button className="filter-chip" onClick={onNavigateCollars}>City Walks</button>
            <button className="filter-chip" onClick={onNavigateBeds}>Luxe Velvet</button>
          </div>
          <div className="product-grid">
            {PRODUCTS.map((product) => {
              const handleNavigateToCategory = () => {
                if (product.category === 'Harnesses') onNavigateHarnesses();
                else if (product.category === 'Collars') onNavigateCollars();
                else if (product.category === 'Beds') onNavigateBeds();
                else if (product.category === 'Toys') onNavigateToys();
                else if (product.category === 'Bowls') onNavigateBowls();
                else if (product.category === 'Others') onNavigateOthers();
              };

              return (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleNavigateToCategory} 
                  onImageClick={handleNavigateToCategory}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__card">
            <div className="newsletter__content">
              <h2 className="newsletter__title">Join the Bella & Luna Lifestyle</h2>
              <p className="newsletter__text">
                Get exclusive access to limited-edition drops, editorial pet care tips, and 15% off your first order.
              </p>
              <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="newsletter__input" 
                  placeholder="Enter your email" 
                  type="email" 
                />
                <button className="button button--secondary newsletter__btn">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="newsletter__decoration newsletter__decoration--leaf">
              <Leaf size={240} />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="floating-cart">
          <button 
            onClick={onCheckout}
            className="floating-cart__btn"
          >
            <div className="floating-cart__icon-wrapper">
              <ShoppingCart size={24} />
              <span className="floating-cart__count">{cartCount}</span>
            </div>
            <span className="floating-cart__label">
              Checkout • ${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
