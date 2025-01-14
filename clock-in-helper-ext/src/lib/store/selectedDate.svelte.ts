export function createSelectedDateStore() {
  let date = $state({ value: new Date() });

  const set = (d: Date) => {
    console.log(d, new Date());
    date.value = new Date(d);
  };

  return {
    date,
    set,
  };
}

export const selectedDateStore = createSelectedDateStore();
