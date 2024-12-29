<script lang="ts">
  import { Icon } from '$lib/components';
  import { setTheme, loadTheme } from '$lib/theme';
  import { createStorageAdapter } from '$lib/adapters';

  const storage = createStorageAdapter();

  let currentTheme: 'light' | 'dark' = $state('light');

  const themeIcon = $derived(
    currentTheme === 'light' ? 'i-mdi-weather-sunny' : 'i-mdi-weather-night',
  );

  loadTheme().then(async () => {
    const themeData = await storage.get<'light' | 'dark'>('theme');
    currentTheme = themeData || 'light';
  });

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
  }
</script>

<button
  class="relative w-16 h-8 flex items-center rounded-full border border-gray-400 bg-gray3 transition-all"
  aria-label="Toggle theme"
  onclick={toggleTheme}
>
  <div
    class="wrapper absolute w-6 h-6 rounded-full bg-gray1 shadow-md transition-transform duration-300 dark:shadow-gray8"
    style={`transform: translateX(${currentTheme === 'dark' ? '150%' : '0%'});`}
  >
    <Icon
      class="{themeIcon} absolute left-0 top-0 w-1.4rem h-1.4rem opacity-100 text-4xl"
    />
  </div>
</button>
