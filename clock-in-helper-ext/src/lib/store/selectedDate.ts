import { writable } from 'svelte/store';

export const selectedDate = writable(new Date());
