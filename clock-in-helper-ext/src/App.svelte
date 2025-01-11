<script lang="ts">
  import { Button, Card } from '$lib/components/primitives';
  import { Clock, DateSelector, Header, Icon } from '$lib/components';
  import DayEntries from '$lib/components/DayEntries.svelte';
  import { dataSet, type DataSetItemType } from '$lib/store/dataSet';
  import Carousel from '$lib/components/Carousel.svelte';
  import { findIndexOfDate } from '$lib/utils/findIndexOfDate';
  import { selectedDate } from '$lib/store/selectedDate';

  let activeDataIndex = $state(findIndexOfDate($dataSet, $selectedDate));

  $effect(() => {
    activeDataIndex = findIndexOfDate($dataSet, $selectedDate);
  });
</script>

<main class="font-mono w-30rem bg-gray1 text-gray12 min-h-screen p-4">
  <Header subtitle="Simplifique seu registro de horas" />

  <Card class="bg-base1 my-2">
    <DateSelector />
    <Clock />
    <div class="flex justify-between gap-2 py-4">
      <Button color="primary" size="full">Clock-in now!</Button>
      <Button color="primary" variant="outline" size="full"
        >Edit <Icon class="i-mdi-pen p-2 ml-2" /></Button
      >
    </div>
    {#if $selectedDate.toISOString().split('T')[0] !== new Date()
        .toISOString()
        .split('T')[0]}
      <button
        onclick={() => {
          selectedDate.update(() => new Date());
        }}>pular para hoje</button
      >
    {/if}
  </Card>
  {#if activeDataIndex >= 0}
    <Carousel dataSet={$dataSet} showControls={false} startAt={activeDataIndex}>
      {#snippet item({ date, entries }: DataSetItemType)}
        <DayEntries {date} {entries} totalHours={1} />
      {/snippet}
    </Carousel>
  {:else}
    <p>Você ainda não registrou entradas hoje</p>
  {/if}

  <button
    onclick={() => {
      dataSet.update(() => [
        ...$dataSet,
        {
          description: '',
          date: String(new Date()),
          entries: [String(new Date())],
        },
      ]);
    }}>Adiciona dia</button
  >

  <!-- <Card>
    <h2 class="text-lg font-bold mb-2">Registros de Dezembro - 2024</h2>
    <ul>
      {#each mockRecords as record}
        <li class="flex justify-between py-2 border-b border-gray-300">
          <span>{record.date}</span>
          <span>{record.start} - {record.end}</span>
          <span>{record.total}</span>
        </li>
      {/each}
    </ul>
    <div class="flex justify-end mt-4">
      <strong>Total: {totalHours}h</strong>
    </div>
  </Card> -->
</main>
