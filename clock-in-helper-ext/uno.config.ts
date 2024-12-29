import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetRadix } from 'unocss-preset-radix';

export default defineConfig({
  presets: [
    presetUno({}),
    presetIcons(),
    presetRadix({
      palette: ['blue', 'green', 'red', 'amber', 'gray'],
      darkSelector: '.dark',
      aliases: {
        primary: 'green',
        base: 'slate',
      },
    }),
  ],
});
