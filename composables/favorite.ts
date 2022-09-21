import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useFavoriteStore = defineStore({
  id: 'favorite',
  state: () => ({
    items: useStorage('favorites', new Set<string | number>([])),
  }),
  getters: {
    all: state => state.items.values(),
    has: state => (id: number) => state.items.has(id),
    total: state => state.items.size,
  },
  actions: {
    add(id: number) { return this.items.add(id) },
    remove(id: number) { return this.items.delete(id) },
    clear() { return this.items.clear() },
  },
})
