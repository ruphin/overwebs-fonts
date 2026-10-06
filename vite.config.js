import { defineConfig } from 'vite';

export default defineConfig({
  // Fonts are loaded at runtime from <package>/fonts, not bundled.
  publicDir: false,
  build: {
    lib: {
      entry: 'overwebs-fonts.js',
      formats: ['es'],
      fileName: () => 'overwebs-fonts.js',
    },
    minify: false,
  },
});
