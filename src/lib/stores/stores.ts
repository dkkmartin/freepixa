import type { Result } from '$lib/types/unsplash';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const imageDataStore = persist(writable(), createLocalStorage(), 'image-data');

export const localFavsStore = persist(writable<Result[]>([]), createLocalStorage(), 'favs');
