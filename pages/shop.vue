<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = breakpoints.smallerOrEqual('md')

definePageMeta({
  layout: 'app',
})
</script>

<template>
  <main>
    <section>
      <h1>SERP</h1>
    </section>
  </main>
</template>

<style>
.clipped {
  @apply relative uppercase;
  clip-path: polygon(0 100%, 0 1rem, 1rem 0, 100% 0, 100% 1rem, calc(100% - 1rem) 100%);
}
.clipped::before,
.clipped::after {
  @apply content-none block absolute border-3 w-4 h-4;
}
.clipped::before {
  left: 0;
  bottom: 0;
  border-right: 0;
  border-top: 0;
}
.clipped::after {
  right: 0;
  top: 0;
  border-left: 0;
  border-bottom: 0;
}
</style>
