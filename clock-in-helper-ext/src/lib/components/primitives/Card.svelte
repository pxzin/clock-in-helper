<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className,
    bgColor = 'bg-base4',
  }: {
    children: Snippet;
    class?: string;
    bgColor?: string;
  } = $props();
</script>

<div class="rounded-lg p-4 shadow-md {className} {bgColor}">
  {@render children()}
</div>
