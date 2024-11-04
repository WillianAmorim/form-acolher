import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do .env
console.log('VITE_API_URL:', process.env.VITE_API_URL);
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL, // Use process.env no vite.config.ts
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
