import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/'),
    },
  },
});
