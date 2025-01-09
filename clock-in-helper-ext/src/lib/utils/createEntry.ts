export const createEntry = (
  date: string,
  description: string,
  entries: string[],
) => {
  return {
    [date]: {
      description,
      entries,
    },
  };
};
