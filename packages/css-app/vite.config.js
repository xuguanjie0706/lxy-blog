import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS(),basicSsl()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/'),
    },
  },
  server: {
    host: '0.0.0.0',
    https: true
  },
});
