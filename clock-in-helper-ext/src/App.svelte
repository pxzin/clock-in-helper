<script lang="ts">
  import { Button, Card } from '$lib/components/primitives';
  import {
    Clock,
    DateSelector,
    Header,
    Icon,
    Carousel,
    DayEntries,
  } from '$lib/components';
  import { findIndexOfDate, formatStartOfDay } from '$lib/utils';
  import { dataSet, type DataSetItemType } from '$lib/store/dataSet';
  import { selectedDateStore } from '$lib/store/selectedDate.svelte';

  const { date: selectedDate, set: setSelectedDate } = selectedDateStore;

  let activeDataIndex = $state(findIndexOfDate($dataSet, selectedDate.value));

  $effect(() => {
    activeDataIndex = findIndexOfDate($dataSet, selectedDate.value);
  });
</script>

<main
  class="font-mono w-30rem h-37rem bg-gray1 text-gray12 p-2 overflow-hidden"
>
  <Header subtitle="Simplifique seu registro de horas" />

  <Card class="bg-base1 mt-2">
    <DateSelector />
    <Clock />
    <div class="flex justify-between gap-2 py-4">
      <Button color="primary" size="full">Clock-in now!</Button>
      <Button color="primary" variant="outline" size="full"
        >Edit <Icon class="i-mdi-pen p-2 ml-2" /></Button
      >
    </div>
    {#if selectedDate.value.toISOString().split('T')[0] !== new Date()
        .toISOString()
        .split('T')[0]}
      <button
        onclick={() => {
          selectedDate.value = new Date();
        }}>pular para hoje</button
      >
    {/if}
  </Card>
  {#if activeDataIndex >= 0}
    <div>
      <Carousel
        dataSet={$dataSet}
        showControls={false}
        startAt={activeDataIndex}
      >
        {#snippet item({ date, entries }: DataSetItemType)}
          <DayEntries {date} {entries} totalHours={1} />
        {/snippet}
      </Carousel>
    </div>
  {:else}
    <div>
      <DayEntries
        date={formatStartOfDay(selectedDate.value)}
        entries={[]}
        totalHours={0}
      />
    </div>
  {/if}

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
