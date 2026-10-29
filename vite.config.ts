import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` genera rutas relativas: el mismo build funciona en un dominio propio,
// en GitHub Pages (usuario.github.io/repositorio/) o en cualquier subcarpeta.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2019',
    cssCodeSplit: false,
  },
});
