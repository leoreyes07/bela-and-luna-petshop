import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const cspHeader = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';";

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    // En desarrollo usamos la raíz, en producción el sub‑directorio
    base: isProd ? '/bela-and-luna-petshop/' : '/',
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, '.') } },
    // HMR disabled to avoid inline script CSP violation
    server: { hmr: false },
    // En preview (producción) aplicamos CSP headers
    preview: isProd ? { headers: { 'Content-Security-Policy': cspHeader } } : {},
  };
});