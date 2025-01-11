<script lang="ts" generics="T">
  import { onMount, type Snippet } from 'svelte';

  const {
    startAt = 0,
    item,
    dataSet,
    showControls = true,
  }: {
    startAt?: number;
    item: Snippet<[T]>;
    dataSet: T[];
    showControls?: boolean;
  } = $props();

  const jumpToIndexHandler = (index: number) => {
    if (index >= 0 && index < dataSet.length) {
      currentIndex = index;
      updateCarousel();
    }
  };

  let currentIndex = 0;
  let carouselContainer: HTMLDivElement;

  const next = () => {
    currentIndex = (currentIndex + 1) % dataSet.length;
    updateCarousel();
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + dataSet.length) % dataSet.length;
    updateCarousel();
  };

  const updateCarousel = () => {
    if (carouselContainer) {
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  onMount(() => {
    updateCarousel();
  });

  $effect(() => {
    jumpToIndexHandler(startAt);
  });
</script>

<div class="relative overflow-hidden w-full">
  <div
    bind:this={carouselContainer}
    class="flex transition-transform duration-300 ease-in-out"
  >
    {#each dataSet as data}
      <div class="min-w-full">
        {@render item(data)}
      </div>
    {/each}
  </div>
  {#if showControls}
    <button
      onclick={prev}
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >Prev</button
    >
    <button
      onclick={next}
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >Next</button
    >
  {/if}

  O X dentro do carrossel = {startAt}
</div>
