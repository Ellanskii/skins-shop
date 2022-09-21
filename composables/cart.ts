import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: useStorage('cart', new Set<string | number>([])),
  }),
  getters: {
    all: state => state.items.values(),
    has: state => (id: number) => state.items.has(id),
    total: state => state.items.size,
  },
  actions: {
    add(id: number) { this.items.add(id) },
    remove(id: number) { this.items.delete(id) },
    clear() { this.items.clear() },
  },
})
