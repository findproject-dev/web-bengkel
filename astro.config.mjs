// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://findfix.id',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
