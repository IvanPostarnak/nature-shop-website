import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      tests: path.resolve(__dirname, "__tests__"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
    }
  },
  server: {
    port: 7070
  },
})
