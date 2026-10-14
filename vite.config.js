import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NETLIFY ? "/" : "/emariaje/",

  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        productos: resolve(
          import.meta.dirname,
          'productos/productos.html'
        ),

         // Nueva página de detalle de las mochilas.
        producto: resolve(
          import.meta.dirname,
          'producto.html'
        ),
      },
    },
  },
});