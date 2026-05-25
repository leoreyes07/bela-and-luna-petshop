import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx'
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
