import { defineNuxtConfig } from 'nuxt'
import KuiModule from '..'

export default defineNuxtConfig({
  modules: [
    KuiModule,
    '@unocss/nuxt',
    '@nuxtjs/strapi'
  ],
  strapi: {},
  myModule: {
    // addPlugin: true
  },
  css: ['daisyui/dist/full.css'],
  unocss: {
    uno: true,
  }
})
