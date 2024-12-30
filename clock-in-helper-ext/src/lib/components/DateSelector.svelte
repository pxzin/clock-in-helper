<script lang="ts">
  import { Icon } from '$lib/components';
  import { Button } from '$lib/components/primitives';

  let currentDate: Date = new Date();

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const previousDay = (): void => {
    currentDate.setDate(currentDate.getDate() - 1);
    currentDate = new Date(currentDate);
  };

  const nextDay = (): void => {
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate = new Date(currentDate);
  };
</script>

<div class="flex items-center">
  <Button color="secondary" variant="text" onclick={previousDay}>
    <Icon class="i-mdi-chevron-left p-2" />
  </Button>
  <h3 class="mx-2 w-full text-center">{formatDate(currentDate)}</h3>
  <Button color="secondary" variant="text" onclick={nextDay}>
    <Icon class="i-mdi-chevron-right p-2" />
  </Button>
</div>
