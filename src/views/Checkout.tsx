import { Truck, CreditCard, Wallet, Send, Lock, Gift, ShieldCheck, RotateCcw, Package } from 'lucide-react';
import { Product, CartItemType } from '../constants';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import './Checkout.css';

interface CheckoutProps {
  cart: CartItemType[];
  totalPrice: number;
  onRemoveItem: (index: number) => void;
}

export default function Checkout({ cart, totalPrice, onRemoveItem }: CheckoutProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const shipping = 0;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

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
          <h2 className="checkout-success__title">Yay! Order Placed.</h2>
          <p className="checkout-success__text">Your treats are being packed with love and will be on their way to you shortly.</p>
          <div className="checkout-success__actions">
            <button 
              onClick={() => window.location.reload()}
              className="button button--primary"
            >
              Continue Shopping
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
              <h1 className="checkout__title">Secure Checkout</h1>
              <p className="checkout__subtitle">Complete your order for your furry friend below.</p>
            </div>

            {/* Shipping Details Section */}
            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-card__icon-wrapper checkout-card__icon-wrapper--primary">
                  <Truck size={20} />
                </div>
                <h2 className="checkout-card__title">Shipping Information</h2>
              </div>
              <form className="checkout-form">
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">First Name</label>
                    <input className="checkout-form__input" placeholder="Bela" type="text" />
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Last Name</label>
                    <input className="checkout-form__input" placeholder="Luna" type="text" />
                  </div>
                </div>
                <div className="checkout-form__group">
                  <label className="checkout-form__label">Shipping Address</label>
                  <input className="checkout-form__input" placeholder="123 Puppy Lane, Suite 400" type="text" />
                </div>
                <div className="checkout-form__row">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">City</label>
                    <input className="checkout-form__input" placeholder="Barkington" type="text" />
                  </div>
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Postal Code</label>
                    <input className="checkout-form__input" placeholder="90210" type="text" />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Details Section */}
            <div className="checkout-card">
              <div className="checkout-card__header">
                <div className="checkout-card__icon-wrapper checkout-card__icon-wrapper--secondary">
                  <CreditCard size={20} />
                </div>
                <h2 className="checkout-card__title">Payment Method</h2>
              </div>
              <div className="payment-methods">
                <div className="payment-methods__chips">
                  <button className="payment-methods__chip payment-methods__chip--active">
                    <CreditCard size={18} /> Card
                  </button>
                  <button className="payment-methods__chip">
                    <Wallet size={18} /> PayPal
                  </button>
                  <button className="payment-methods__chip">
                    <Send size={18} /> Pay
                  </button>
                </div>
                <div className="checkout-form">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Card Number</label>
                    <div className="checkout-form__input-wrapper">
                      <input className="checkout-form__input" placeholder="•••• •••• •••• ••••" type="text" />
                      <CreditCard className="checkout-form__input-icon" size={20} />
                    </div>
                  </div>
                  <div className="checkout-form__row">
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">Expiry Date</label>
                      <input className="checkout-form__input" placeholder="MM/YY" type="text" />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">CVV</label>
                      <input className="checkout-form__input" placeholder="•••" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCompletePurchase}
              className="button button--primary checkout__submit"
            >
              <Lock size={24} /> Complete Purchase
            </button>
          </section>

          {/* RIGHT COLUMN: Order Summary */}
          <aside className="checkout__summary">
            <div className="summary-card">
              <h2 className="summary-card__title">Order Summary</h2>
              
              <div className="summary-card__items">
                {cart.length === 0 ? (
                  <p className="summary-card__empty">Your cart is empty.</p>
                ) : (
                  cart.map((item, index) => (
                    <CartItem 
                      key={`${item.product.id}-${index}`} 
                      item={item} 
                      onRemove={() => onRemoveItem(index)}
                    />
                  ))
                )}
              </div>

              <div className="summary-card__totals">
                <div className="summary-card__row">
                  <span>Subtotal</span>
                  <span className="summary-card__value">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-card__row">
                  <span>Shipping</span>
                  <span className="summary-card__value summary-card__value--free">Free</span>
                </div>
                <div className="summary-card__row">
                  <span>Tax</span>
                  <span className="summary-card__value">${tax.toFixed(2)}</span>
                </div>
                <div className="summary-card__row summary-card__row--final">
                  <span className="summary-card__total-label">Total</span>
                  <span className="summary-card__total-value">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="promo-box">
              <Gift className="promo-box__icon" size={24} />
              <div className="promo-box__content">
                <p className="promo-box__label">Have a coupon?</p>
                <input className="promo-box__input" placeholder="Enter code" type="text" />
              </div>
              <button className="promo-box__apply">Apply</button>
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
