import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponentsDir } from '@nuxt/kit'
import { styled, unstyled } from 'daisyui'

const rPath = (p: string) => fileURLToPath(new URL(p, import.meta.url).toString())
export interface ModuleOptions {
  addCSS: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'kui',
    configKey: 'kui'
  },
  defaults: {
    addCSS: true
  },
  setup (options, nuxt) {
    addComponentsDir({ path: rPath('./components') })
  }
})
