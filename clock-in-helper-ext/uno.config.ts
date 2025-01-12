import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetRadix } from 'unocss-preset-radix';
import presetWebFonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
  presets: [
    presetUno({}),
    presetIcons(),
    presetRadix({
      palette: ['blue', 'green', 'red', 'slate', 'gray', 'orange', 'purple'],
      darkSelector: '.dark',
      aliases: {
        primary: 'orange',
        secondary: 'blue',
        base: 'slate',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: 'Fira Code',
      },
      processors: createLocalFontProcessor({
        // Directory to cache the fonts
        cacheDir: 'node_modules/.cache/unocss/fonts',

        // Directory to save the fonts assets
        fontAssetsDir: 'public/assets/fonts',

        // Base URL to serve the fonts from the client
        fontServeBaseUrl: '/assets/fonts',
      }),
    }),
    presetScrollbar({
      scrollbarThumbColor: 'black',
    }),
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
      mono: 'Fira Code, monospace',
    },
  },
});
