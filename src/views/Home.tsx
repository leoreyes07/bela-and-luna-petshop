import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Dog, Leaf } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import heroDogs from '../assets/hero-dogs.webp';
import './Home.css';

export default function Home() {
  const { cartCount, totalPrice, addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              Esenciales Premium para tu Mascota
            </div>
            <h1 className="hero__title">
              Diseñado con amor <br />
              <span className="hero__title--highlight">para cada colita.</span>
            </h1>
            <p className="hero__text">
              Esenciales cuidadosamente diseñados para tu mejor amigo. Porque cada meneo y ronroneo merece lo mejor.
            </p>
            <div className="hero__actions">
              <button className="button button--primary hero__btn" onClick={() => navigate('/harnesses')}>
                Ver la Colección
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
              <h2 className="categories-section__title">Explorar por Categoría</h2>
            </div>
            <p className="categories-section__subtitle">Encontrá exactamente lo que tu compañero necesita.</p>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <CategoryCard 
                key={cat.name} 
                name={cat.name} 
                iconName={cat.icon} 
                onClick={
                  cat.name === 'Arneses' ? () => navigate('/harnesses')
                  : cat.name === 'Collares' ? () => navigate('/collars')
                  : cat.name === 'Juguetes' ? () => navigate('/toys')
                  : cat.name === 'Camas' ? () => navigate('/beds')
                  : cat.name === 'Platos' ? () => navigate('/bowls')
                  : cat.name === 'Otros' ? () => navigate('/others')
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
            <button className="filter-chip filter-chip--active">Todos los Productos</button>
            <button className="filter-chip" onClick={() => navigate('/harnesses')}>Serie Aventura</button>
            <button className="filter-chip" onClick={() => navigate('/collars')}>Paseos en Ciudad</button>
            <button className="filter-chip" onClick={() => navigate('/beds')}>Terciopelo Lux</button>
          </div>
          <div className="product-grid">
            {PRODUCTS.map((product) => {
              const handleNavigateToCategory = () => {
                if (product.category === 'Harnesses') navigate('/harnesses');
                else if (product.category === 'Collars') navigate('/collars');
                else if (product.category === 'Beds') navigate('/beds');
                else if (product.category === 'Toys') navigate('/toys');
                else if (product.category === 'Bowls') navigate('/bowls');
                else if (product.category === 'Others') navigate('/others');
              };

              return (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(prod, size) => addToCart(prod, size)} 
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
              <h2 className="newsletter__title">Unite al estilo Bela & Luna</h2>
              <p className="newsletter__text">
                Accedé en exclusiva a lanzamientos de edición limitada, consejos de cuidado editorial y 15% de descuento en tu primer pedido.
              </p>
              <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="newsletter__input" 
                  placeholder="Ingresá tu email" 
                  type="email" 
                />
                <button className="button button--secondary newsletter__btn">
                  Suscribirme
                </button>
              </form>
            </div>
            <div className="newsletter__decoration newsletter__decoration--leaf">
              <Leaf size={240} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
