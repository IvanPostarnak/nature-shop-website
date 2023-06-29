import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {

    }
  },
  test: {
    setupFiles: [path.resolve(__dirname, "__tests__/setup/setup.js")],
    exclude: [
      '**/src/config/**',
      '**/__tests__/setup/**',
      '**/node_modules/**',
      '**/.*/**',
      '**/*.config.*'
    ],
    environment: "jsdom",
    coverage: {
      enabled: false,
      provider: "v8",
      clean: true,
      cleanOnRerun: true,
      all: true
    }
  }
})