<script>
  import { ThemeSwitch } from '$components';
  let { title = 'Clock-in Helper', subtitle } = $props();
</script>

<header class="bg-slate-2 rounded-lg p-4 shadow-md">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold theme-primary">{title}</h1>
    <ThemeSwitch />
  </div>

  {#if subtitle}
    <p class="text-sm mt-1">{subtitle}</p>
  {/if}
</header>
