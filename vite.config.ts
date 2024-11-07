import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';
import path from 'path';

// Forçar o carregamento do arquivo .env.production se estiver no modo de produção
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(__dirname, '.env.production') });
} else {
  dotenv.config(); // Carregar o arquivo padrão .env
}


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
