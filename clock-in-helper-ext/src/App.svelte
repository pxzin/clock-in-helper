<script lang="ts">
  import { Header } from './lib/';
  import { setTheme, loadTheme } from './lib/theme';
  import { createStorageAdapter } from './lib/adapters';

  const storage = createStorageAdapter();

  let currentTheme: 'light' | 'dark' = 'light';

  loadTheme().then(async () => {
    const themeData = await storage.get<'light' | 'dark'>('theme');
    const theme: 'light' | 'dark' = themeData || 'light';
    currentTheme = theme;
  });

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
  }
</script>

<main class="theme-bg theme-text min-h-screen p-4">
  <Header subtitle="Simplifique seu registro de horas" />
  <button
    class="theme-primary border p-2 rounded-md mt-4"
    on:click={toggleTheme}
  >
    Alternar Tema ({currentTheme})
  </button>
</main>
