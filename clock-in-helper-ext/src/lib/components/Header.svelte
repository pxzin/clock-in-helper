<script>
  import { ThemeSwitch } from '$components';
  import { Card } from '$components/primitives';

  let { title = 'Clock-in Helper', subtitle } = $props();
</script>

<Card>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold theme-primary">{title}</h1>
    <ThemeSwitch />
  </div>

  {#if subtitle}
    <p class="text-sm mt-1">{subtitle}</p>
  {/if}
</Card>
