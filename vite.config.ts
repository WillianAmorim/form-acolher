import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import { resolve } from 'path';
if (process.env.NODE_ENV !== 'production') {
  // Carrega dotenv apenas em desenvolvimento
 
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
});
