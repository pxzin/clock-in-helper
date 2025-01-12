<script lang="ts">
  type DayEntriesProps = {
    date: string;
    entries: string[];
    totalHours: number;
  };

  const { date, entries, totalHours }: DayEntriesProps = $props();

  import { formatDate } from '$lib/utils/formatDate';
  import { Icon } from '.';
  import { Card } from './primitives';
</script>

<Card
  class="bg-base1 my-2 overflow-y-auto max-h-15.5rem scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4 scrollbar-thumb-color-primary8 scrollbar-track-color-gray8"
>
  <h2 class="text-lg font-bold mb-1">
    Registros de {formatDate(date)}
  </h2>
  <ul>
    {#if entries.length === 0}
      <h2 class="py-2 text-gray12 text-2xl text-center">
        Nenhum registro encontrado
      </h2>
    {/if}
    {#each entries as entry}
      <li
        class="flex justify-between items-center gap-2 py-2 border-b border-hue9 hue-gray text-sm"
      >
        <div class="flex justify-between w-full">
          <span>{entry}</span>
        </div>
        <div class="flex gap-2 overflow-clip">
          <Icon class="i-mdi-pen p-2 ml-2 text-hue9 hue-secondary" />
          <Icon class="i-mdi-trash p-2 ml-2 text-hue9 hue-red" />
        </div>
      </li>
    {/each}
  </ul>
  <div class="flex justify-end mt-4">
    <strong>Total: {totalHours}h</strong>
  </div>
</Card>
