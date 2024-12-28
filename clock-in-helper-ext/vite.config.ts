import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import extractorSvelte from '@unocss/extractor-svelte';

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
});
