import { writable } from 'svelte/store';

export const token = writable(null)

export const cmsPath = writable('')

export const dropEdit = writable({})
