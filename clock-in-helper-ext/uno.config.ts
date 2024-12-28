import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  theme: {
    colors: {
      light: {
        background: '#ffffff',
        text: '#000000',
        primary: '#1E90FF',
      },
      dark: {
        background: '#1e1e1e',
        text: '#ffffff',
        primary: '#FF69B4',
      },
    },
  },
  shortcuts: {
    'theme-bg': 'bg-[var(--background)]',
    'theme-text': 'text-[var(--text)]',
    'theme-primary': 'text-[var(--primary)]',
  },
});
