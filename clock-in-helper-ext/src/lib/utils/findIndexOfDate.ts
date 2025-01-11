import type { DataSetType } from '$lib/store/dataSet';

export const findIndexOfDate = (dataSet: DataSetType, date: Date) => {
  return dataSet.findIndex((item) => {
    return new Date(item.date).toDateString() === date.toDateString();
  });
};
