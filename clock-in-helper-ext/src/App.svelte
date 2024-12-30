<script lang="ts">
  import { Button, Card } from '$lib/components/primitives';
  import { Clock, DateSelector, Header, Icon } from '$lib/components';
  const mockRecords = [
    { date: '2023-10-01', start: '08:00', end: '12:00', total: '4h' },
    { date: '2023-10-01', start: '13:00', end: '17:00', total: '4h' },
    { date: '2023-10-02', start: '08:00', end: '12:00', total: '4h' },
    { date: '2023-10-02', start: '13:00', end: '17:00', total: '4h' },
  ];

  const totalHours = mockRecords.reduce((acc, record) => {
    const hours = parseInt(record.total);
    return acc + hours;
  }, 0);
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
  </Card>

  <Card class="bg-base1 my-2">
    <h2 class="text-lg font-bold mb-2">Registros de 2024-12-29</h2>
    <ul>
      {#each mockRecords.filter((record) => record.date === '2023-10-02') as record}
        <li
          class="flex justify-between items-center gap-2 py-2 border-b border-gray-300"
        >
          <div class="flex justify-between w-full">
            <span>{record.start} - {record.end}</span>
            <span>{record.total}</span>
          </div>
          <div class="flex gap-2 overflow-clip">
            <Icon class="i-mdi-pen p-2 ml-2 text-hue9 hue-secondary" />
            <Icon class="i-mdi-trash p-2 ml-2 text-hue9 hue-red" />
          </div>
        </li>
      {/each}
    </ul>
    <div class="flex justify-end mt-4">
      <strong
        >Total: {mockRecords
          .filter((record) => record.date === '2023-10-02')
          .reduce((acc, record) => acc + parseInt(record.total), 0)}h</strong
      >
    </div>
  </Card>

  <Card class="bg-base1 my-2">
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
  </Card>
</main>
