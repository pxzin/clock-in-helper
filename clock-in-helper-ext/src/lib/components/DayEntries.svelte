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

<Card class="bg-base1 my-2">
  <h2 class="text-lg font-bold mb-2">
    Registros de {formatDate(date)}
  </h2>
  <ul>
    {#each entries as entry}
      <li
        class="flex justify-between items-center gap-2 py-2 border-b border-gray-300"
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
