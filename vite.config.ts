import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@data': path.resolve(__dirname, 'src/components/sections/data.ts'),
      '@types': path.resolve(__dirname, 'src/components/sections/types.ts'),
      // Add more aliases as needed
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
