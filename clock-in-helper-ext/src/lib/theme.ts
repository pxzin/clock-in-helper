import { createStorageAdapter } from './adapters/index';

const storage = createStorageAdapter();

export async function setTheme(theme: 'light' | 'dark') {
  document.documentElement.style.setProperty(
    '--background',
    theme === 'light' ? '#ffffff' : '#1e1e1e',
  );
  document.documentElement.style.setProperty(
    '--text',
    theme === 'light' ? '#000000' : '#ffffff',
  );
  document.documentElement.style.setProperty(
    '--primary',
    theme === 'light' ? '#1E90FF' : '#FF69B4',
  );
  await storage.set<'light' | 'dark'>('theme', theme);
}

export async function loadTheme() {
  const theme = await storage.get<'light' | 'dark'>('theme');
  setTheme(theme || 'light');
}
