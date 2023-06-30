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
      store: path.resolve(__dirname, "src/store"),
      components: path.resolve(__dirname, "src/components"),
      widgets: path.resolve(__dirname, "src/widgets"),
      hooks: path.resolve(__dirname, "src/hooks"),
      config: path.resolve(__dirname, "src/config")
    }
  },
  server: {
    port: 7070
  },
})
