import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import extractorSvelte from '@unocss/extractor-svelte';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte()],
    }),
    svelte({
      emitCss: false,
    }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/lib/components'),
      $adapters: path.resolve('./src/lib/adapters'),
    },
  },
});
