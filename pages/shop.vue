<script lang="ts" setup>
const { data } = await useFetch('/api/mock/items')

const { filters } = useUrlSearchParams()

definePageMeta({
  layout: 'serp',
})
</script>

<template>
  <div class="divide-y divide-main">
    <slot />
  </div>
</template>

<style lang="postcss">
#layout {
  display: grid;
  grid-template-areas: "
      checkout   cart,
      filters filters,
      cards     cards
    ";
}

[area-cards] {
  grid-area: cards;
  column-span: all;
}
[area-checkout] {
  grid-area: checkout;
  column-span: all;
}

.clipped {
  @apply relative uppercase;
  clip-path: polygon(0 100%, 0 1rem, 1rem 0, 100% 0, 100% 1rem, calc(100% - 1rem) 100%);
}
.clipped::before,
.clipped::after {
  @apply content-none block absolute border-3 b-orange-600 w-4 h-4;
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
