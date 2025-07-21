import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    compression(), // gzip compression for smaller bundles
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
});
