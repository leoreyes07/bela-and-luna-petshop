import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Product, CartItemType } from '../constants';

interface CartContextType {
  cart: CartItemType[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (indexToRemove: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const cartCount = cart.length;
  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  const addToCart = (product: Product, size: string = 'M') => {
    const price = product.pricesBySize ? (product.pricesBySize[size] || product.price) : product.price;
    setCart((prev) => [...prev, { product, size, price }]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
