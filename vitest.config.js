import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      tests: path.resolve(__dirname, "__tests__"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages")
    }
  },
  test: {
    setupFiles: [path.resolve(__dirname, "__tests__/setup/setup.js")],
    exclude: [
      '**/__tests__/setup/**',
      '**/__tests__/helpers/**',
      '**/src/config/**',
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
    },
    resolveSnapshotPath: (testPath, snapshotExtension) => {
      return "./__tests__/__snapshots__/" + testPath.split('/').pop().split('.').slice(0, -2).join('.') + snapshotExtension
    },
  }
});