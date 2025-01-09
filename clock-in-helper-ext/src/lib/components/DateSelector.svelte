<script lang="ts">
  import { Icon } from '$lib/components';
  import { Button } from '$lib/components/primitives';
  import { selectedDate } from '$lib/store/selectedDate';
  import { formatDate } from '$lib/utils/formatDate';

  const previousDay = (): void => {
    $selectedDate.setDate($selectedDate.getDate() - 1);
    $selectedDate = new Date($selectedDate);
  };

  const nextDay = (): void => {
    $selectedDate.setDate($selectedDate.getDate() + 1);
    $selectedDate = new Date($selectedDate);
  };
</script>

<div class="flex items-center">
  <Button color="secondary" variant="text" onclick={previousDay}>
    <Icon class="i-mdi-chevron-left p-2" />
  </Button>
  <h3 class="mx-2 w-full text-center">{formatDate($selectedDate)}</h3>
  <Button color="secondary" variant="text" onclick={nextDay}>
    <Icon class="i-mdi-chevron-right p-2" />
  </Button>
</div>
