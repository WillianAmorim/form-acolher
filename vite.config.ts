import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// Configuração para ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV !== 'production';

export default defineConfig({
  plugins: [react(), svgr()],
  server: isDevelopment
    ? {
        proxy: {
          '/api': {
            target: process.env.VITE_API_URL, // Certifique-se de definir VITE_API_URL no seu arquivo .env.local
            changeOrigin: true,
            secure: false,
          },
        },
      }
    : {},
});
