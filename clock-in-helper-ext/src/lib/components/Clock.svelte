<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const time = writable(new Date());

  onMount(() => {
    const interval = setInterval(() => {
      time.set(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div class="text-2xl font-bold text-center mt-5">
  {$time.toLocaleTimeString()}
</div>
