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

<main class="bg-gray1 text-gray12 min-h-screen p-4">
  <Header subtitle="Simplifique seu registro de horas" />
  <button
    class="hue-primary bg-hue2 text-hue9 border p-2 rounded-md mt-4"
    on:click={toggleTheme}
  >
    Alternar Tema ({currentTheme})
  </button>
  <p class="bg-brand-primary">
    text-primary-900 Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
  <p class="hue-red text-hue-9">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
  <p class="p-4 bg-gray1 text-amber12">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>

  <div class="p-4 bg-gray12 text-gray1">Text on gray background</div>
</main>
