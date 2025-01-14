<script lang="ts">
  import { Icon } from '$lib/components';
  import { Button } from '$lib/components/primitives';
  import { formatDate } from '$lib/utils/formatDate';
  import { selectedDateStore } from '$lib/store/selectedDate.svelte';

  const { date: selectedDate, set: setSelectedDate } = selectedDateStore;

  const stepDay = (next: boolean) => {
    const date = selectedDate.value;
    date.setDate(date.getDate() + (next ? 1 : -1));
    setSelectedDate(date);
  };

  const previousDay = (): void => {
    stepDay(false);
  };

  const nextDay = (): void => {
    stepDay(true);
  };
</script>

<div class="flex items-center">
  <Button color="secondary" variant="text" onclick={previousDay}>
    <Icon class="i-mdi-chevron-left p-2" />
  </Button>
  <h3 class="mx-2 w-full text-center">
    {formatDate(selectedDate.value)}
  </h3>
  <Button color="secondary" variant="text" onclick={nextDay}>
    <Icon class="i-mdi-chevron-right p-2" />
  </Button>
</div>
