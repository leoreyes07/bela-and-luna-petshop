import { Truck, CreditCard, Wallet, Send, Lock, Gift, ShieldCheck, RotateCcw, Package } from 'lucide-react';
import { Product, CartItemType } from '../constants';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Checkout.css';



export default function Checkout() {
  const { cart, totalPrice, removeFromCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'delivery' | 'transfer' | 'whatsapp'>('delivery');
  const shipping = 0;
  const finalTotal = totalPrice + shipping;

  const handleCompletePurchase = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="checkout-success">
        <div className="checkout-success__content">
          <div className="checkout-success__icon-wrapper">
            <ShieldCheck size={48} />
          </div>
          <h2 className="checkout-success__title">¡Listo! Pedido realizado.</h2>
          <p className="checkout-success__text">Tus productos están siendo empacados con amor y estarán en camino muy pronto.</p>
          <div className="checkout-success__actions">
            <button 
              onClick={() => window.location.reload()}
              className="button button--primary"
            >
              Seguir Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="checkout">
      <div className="checkout__container">
        <div className="checkout__layout">
          {/* LEFT COLUMN: Checkout Form */}
          <section className="checkout__main">
            <div className="checkout__header">
              <h1 className="checkout__title">Pago Seguro</h1>
              <p className="checkout__subtitle">Completá tu pedido para tu amigo peludo.</p>
            </div>

            {/* Shipping Details Section */}
            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-card__icon-wrapper checkout-card__icon-wrapper--primary">
                  <Truck size={20} />
                </div>
                <h2 className="checkout-card__title">Información de Envío</h2>
              </div>
              <form className="checkout-form">
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Nombre</label>
                    <input className="checkout-form__input" placeholder="Bela" type="text" />
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Apellido</label>
                    <input className="checkout-form__input" placeholder="Luna" type="text" />
                  </div>
                </div>
                <div className="checkout-form__group">
                  <label className="checkout-form__label">Dirección de Envío</label>
                  <input className="checkout-form__input" placeholder="Calle Principal 123, Apto 400" type="text" />
                </div>
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Ciudad</label>
                    <input className="checkout-form__input" placeholder="Managua" type="text" />
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Código Postal</label>
                    <input className="checkout-form__input" placeholder="90210" type="text" />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Details Section */}
            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-card__icon-wrapper checkout-card__icon-wrapper--secondary">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="checkout-card__title">Método de Pago (Demo Segura)</h2>
              </div>
              
              <div className="payment-methods">
                <div className="payment-methods__disclaimer" style={{ 
                  backgroundColor: 'rgba(0, 204, 153, 0.12)', 
                  borderLeft: '4px solid var(--color-green)',
                  padding: '16px', 
                  borderRadius: '16px', 
                  marginBottom: '24px',
                  fontSize: '0.9rem',
                  color: '#006644',
                  lineHeight: '1.5'
                }}>
                  <strong>🔒 Compra Segura sin Riesgos:</strong> Bela & Luna opera en modo simulación de frontend. Por tu seguridad, <strong>NUNCA</strong> solicitamos ni guardamos números de tarjetas de crédito o datos bancarios en esta plataforma.
                </div>

                <div className="payment-methods__chips">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('delivery')} 
                    className={`payment-methods__chip ${paymentMethod === 'delivery' ? 'payment-methods__chip--active' : ''}`}
                  >
                    <Truck size={18} /> Pago contra entrega
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('transfer')} 
                    className={`payment-methods__chip ${paymentMethod === 'transfer' ? 'payment-methods__chip--active' : ''}`}
                  >
                    <Wallet size={18} /> Transferencia Bancaria
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')} 
                    className={`payment-methods__chip ${paymentMethod === 'whatsapp' ? 'payment-methods__chip--active' : ''}`}
                  >
                    <Send size={18} /> Pedido por WhatsApp
                  </button>
                </div>

                <div className="payment-methods__info" style={{ 
                  backgroundColor: '#ffffff', 
                  padding: '20px', 
                  borderRadius: '16px',
                  border: '1px solid rgba(121, 4, 56, 0.1)',
                  fontSize: '0.95rem',
                  color: 'rgba(121, 4, 56, 0.85)'
                }}>
                  {paymentMethod === 'delivery' && (
                    <p>📦 <strong>Pago contra entrega:</strong> Abonás en efectivo o con tarjeta al recibir tus productos en la puerta de tu casa.</p>
                  )}
                  {paymentMethod === 'transfer' && (
                    <p>🏦 <strong>Transferencia Bancaria:</strong> Al confirmar el pedido te enviaremos los datos de la cuenta para que transfieras sin compartir datos sensibles.</p>
                  )}
                  {paymentMethod === 'whatsapp' && (
                    <p>💬 <strong>Pedido por WhatsApp:</strong> Un asesor de Bela & Luna coordinará el detalle de tu entrega y pago directamente por chat.</p>
                  )}
                </div>
              </div>
            </div>

            <button 
              onClick={handleCompletePurchase}
              className="button button--primary checkout__submit"
              disabled={cart.length === 0}
            >
              <Lock size={24} /> Confirmar Pedido Seguro
            </button>
          </section>

          {/* RIGHT COLUMN: Order Summary */}
          <aside className="checkout__summary">
            <div className="summary-card">
              <h2 className="summary-card__title">Resumen del Pedido</h2>
              
              <div className="summary-card__items">
                {cart.length === 0 ? (
                  <p className="summary-card__empty">Tu carrito está vacío.</p>
                ) : (
                  cart.map((item, index) => (
                    <CartItem 
                      key={`${item.product.id}-${index}`} 
                      item={item} 
                      onRemove={() => removeFromCart(index)}
                    />
                  ))
                )}
              </div>

              <div className="summary-card__totals">
                <div className="summary-card__row">
                  <span>Subtotal</span>
                  <span className="summary-card__value">C${totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-card__row">
                  <span>Envío (no incluido)</span>
                  <span className="summary-card__value summary-card__value--pending">Por calcular</span>
                </div>
                <div className="summary-card__row summary-card__row--final">
                  <span className="summary-card__total-label">Total</span>
                  <span className="summary-card__total-value">C${finalTotal.toFixed(2)}</span>
                </div>
                <div className="summary-card__disclaimer" style={{ fontSize: '0.8rem', color: '#666', textAlign: 'right', marginTop: '8px' }}>
                  * El precio no incluye el costo de envío.
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="promo-box">
              <Gift className="promo-box__icon" size={24} />
              <div className="promo-box__content">
                <p className="promo-box__label">¿Tenés un cupón?</p>
                <input className="promo-box__input" placeholder="Ingresá el código" type="text" />
              </div>
              <button className="promo-box__apply">Aplicar</button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <ShieldCheck size={36} />
              <RotateCcw size={36} />
              <Package size={36} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
