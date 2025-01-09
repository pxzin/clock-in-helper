import { writable } from 'svelte/store';
import { mockEntries } from '$lib/utils/mockEntries';

export const dataSet = writable(mockEntries);
