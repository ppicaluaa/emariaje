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
      },
    },
  },
});