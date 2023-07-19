import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      tests: path.resolve(__dirname, '__tests__'),
      app: path.resolve(__dirname, 'src/app'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
      components: path.resolve(__dirname, 'src/components'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      config: path.resolve(__dirname, 'src/config'),
      errors: path.resolve(__dirname, 'src/errors'),
      entity: path.resolve(__dirname, 'src/entity'),
      assets: path.resolve(__dirname, 'src/assets'),
      features: path.resolve(__dirname, 'src/features'),
      modules: path.resolve(__dirname, 'src/modules'),
      services: path.resolve(__dirname, 'src/services'),
      lib: path.resolve(__dirname, 'src/lib'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      src: path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 7070
  },
})
