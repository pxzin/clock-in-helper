import { writable } from 'svelte/store';
import { mockEntries } from '$lib/utils/mockEntries';

export const dataSet = writable(mockEntries);
export type DataSetType = typeof mockEntries;
export type DataSetItemType = (typeof mockEntries)[0];
