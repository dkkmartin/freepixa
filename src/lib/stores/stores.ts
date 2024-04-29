import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const imageDataStore = persist(writable(), createLocalStorage(), 'image-data');
