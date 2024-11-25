
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import { resolve } from 'path';

// Carrega dotenv apenas em desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: resolve(__dirname, '.env.local') });
}

console.log('VITE_API_URL:', process.env.VITE_API_URL);

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Configura o alias "@" para o diretório src
    },
  },
});
