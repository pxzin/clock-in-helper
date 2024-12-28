<script>
  let { title = 'Clock-in Helper', subtitle } = $props();
</script>

<header class="theme-bg theme-text p-4 shadow-md">
  <h1 class="text-2xl font-bold theme-primary">{title}</h1>
  {#if subtitle}
    <p class="text-sm mt-1">{subtitle}</p>
  {/if}
</header>
