import { createStorageAdapter } from './adapters/index';

const storage = createStorageAdapter();

export async function setTheme(theme: 'light' | 'dark') {
  await storage.set<'light' | 'dark'>('theme', theme);
  setClassTheme(theme);
}

export async function loadTheme() {
  const theme = await storage.get<'light' | 'dark'>('theme');
  setTheme(theme || 'light');
}

export async function setClassTheme(theme: 'light' | 'dark') {
  document.documentElement.className = `${theme}`;
}
