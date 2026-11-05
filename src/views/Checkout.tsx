import { Truck, CreditCard, Wallet, Send, Lock, Gift, ShieldCheck, RotateCcw, Package } from 'lucide-react';
import { Product, CartItemType } from '../constants';
import CartItem from '../components/CartItem';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useCart } from '../contexts/CartContext';
import './Checkout.css';

interface ShippingFormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
}

type ShippingFormErrors = Partial<Record<keyof ShippingFormData, string>>;

const NAME_PATTERN = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,50}$/;
const CITY_PATTERN = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.'-]{2,60}$/;
const POSTAL_CODE_PATTERN = /^[A-Za-z0-9\s-]{3,10}$/;

/**
 * Sanitizes user input by trimming whitespace and escaping HTML special characters
 * before sending data to any future API.
 */
export function sanitizeInput(value: string): string {
  return value
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function validateShippingField(name: keyof ShippingFormData, rawValue: string): string {
  const value = rawValue.trim();

  switch (name) {
    case 'firstName':
      if (!value) return 'El nombre es obligatorio.';
      if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
      if (!NAME_PATTERN.test(value)) return 'El nombre solo puede contener letras y espacios.';
      return '';
    case 'lastName':
      if (!value) return 'El apellido es obligatorio.';
      if (value.length < 2) return 'El apellido debe tener al menos 2 caracteres.';
      if (!NAME_PATTERN.test(value)) return 'El apellido solo puede contener letras y espacios.';
      return '';
    case 'address':
      if (!value) return 'La dirección de envío es obligatoria.';
      if (value.length < 5) return 'Ingresá una dirección más detallada (mínimo 5 caracteres).';
      if (value.length > 120) return 'La dirección no puede superar los 120 caracteres.';
      return '';
    case 'city':
      if (!value) return 'La ciudad es obligatoria.';
      if (value.length < 2) return 'La ciudad debe tener al menos 2 caracteres.';
      if (!CITY_PATTERN.test(value)) return 'Ingresá un nombre de ciudad válido.';
      return '';
    case 'postalCode':
      if (!value) return 'El código postal es obligatorio.';
      if (!POSTAL_CODE_PATTERN.test(value)) return 'Ingresá un código postal válido (3 a 10 caracteres alfanuméricos).';
      return '';
    default:
      return '';
  }
}

export default function Checkout() {
  const { cart, totalPrice, removeFromCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'delivery' | 'transfer' | 'whatsapp'>('delivery');
  const [formData, setFormData] = useState<ShippingFormData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [errors, setErrors] = useState<ShippingFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ShippingFormData, boolean>>>({});
  const [sanitizedOrderData, setSanitizedOrderData] = useState<ShippingFormData | null>(null);

  const shipping = 0;
  const finalTotal = totalPrice + shipping;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof ShippingFormData; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateShippingField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof ShippingFormData; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateShippingField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleCompletePurchase = (e?: FormEvent) => {
    if (e) e.preventDefault();

    const newErrors: ShippingFormErrors = {};
    const allTouched: Partial<Record<keyof ShippingFormData, boolean>> = {};

    (Object.keys(formData) as Array<keyof ShippingFormData>).forEach((field) => {
      allTouched[field] = true;
      const errorMsg = validateShippingField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const sanitizedPayload: ShippingFormData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      address: sanitizeInput(formData.address),
      city: sanitizeInput(formData.city),
      postalCode: sanitizeInput(formData.postalCode),
    };

    setSanitizedOrderData(sanitizedPayload);
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
          <p className="checkout-success__text">
            {sanitizedOrderData ? `Gracias, ${sanitizedOrderData.firstName}. ` : ''}
            Tus productos están siendo empacados con amor y estarán en camino muy pronto.
          </p>
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
              <form id="checkout-shipping-form" className="checkout-form" onSubmit={handleCompletePurchase} noValidate>
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label" htmlFor="firstName">Nombre</label>
                    <input
                      id="firstName"
                      name="firstName"
                      className={`checkout-form__input ${errors.firstName ? 'checkout-form__input--error' : ''}`}
                      placeholder="Bela"
                      type="text"
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,50}$"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      aria-invalid={ Boolean(errors.firstName) }
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && (
                      <span id="firstName-error" className="checkout-form__error" role="alert">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label" htmlFor="lastName">Apellido</label>
                    <input
                      id="lastName"
                      name="lastName"
                      className={`checkout-form__input ${errors.lastName ? 'checkout-form__input--error' : ''}`}
                      placeholder="Luna"
                      type="text"
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,50}$"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      aria-invalid={ Boolean(errors.lastName) }
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    />
                    {errors.lastName && (
                      <span id="lastName-error" className="checkout-form__error" role="alert">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="checkout-form__group">
                  <label className="checkout-form__label" htmlFor="address">Dirección de Envío</label>
                  <input
                    id="address"
                    name="address"
                    className={`checkout-form__input ${errors.address ? 'checkout-form__input--error' : ''}`}
                    placeholder="Calle Principal 123, Apto 400"
                    type="text"
                    required
                    minLength={5}
                    maxLength={120}
                    value={formData.address}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    aria-invalid={ Boolean(errors.address) }
                    aria-describedby={errors.address ? 'address-error' : undefined}
                  />
                  {errors.address && (
                    <span id="address-error" className="checkout-form__error" role="alert">
                      {errors.address}
                    </span>
                  )}
                </div>
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label" htmlFor="city">Ciudad</label>
                    <input
                      id="city"
                      name="city"
                      className={`checkout-form__input ${errors.city ? 'checkout-form__input--error' : ''}`}
                      placeholder="Managua"
                      type="text"
                      required
                      minLength={2}
                      maxLength={60}
                      pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.'-]{2,60}$"
                      value={formData.city}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      aria-invalid={ Boolean(errors.city) }
                      aria-describedby={errors.city ? 'city-error' : undefined}
                    />
                    {errors.city && (
                      <span id="city-error" className="checkout-form__error" role="alert">
                        {errors.city}
                      </span>
                    )}
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label" htmlFor="postalCode">Código Postal</label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      className={`checkout-form__input ${errors.postalCode ? 'checkout-form__input--error' : ''}`}
                      placeholder="90210"
                      type="text"
                      required
                      minLength={3}
                      maxLength={10}
                      pattern="^[A-Za-z0-9\s-]{3,10}$"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      aria-invalid={ Boolean(errors.postalCode) }
                      aria-describedby={errors.postalCode ? 'postalCode-error' : undefined}
                    />
                    {errors.postalCode && (
                      <span id="postalCode-error" className="checkout-form__error" role="alert">
                        {errors.postalCode}
                      </span>
                    )}
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
              type="submit"
              form="checkout-shipping-form"
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
