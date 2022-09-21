<script lang="ts" setup>
const props = defineProps<{
  id: number
  name: string
}>()
</script>

<template>
  <NuxtLink class="link link-hover" :to="`?product=${id}`">
    {{ name }}
  </NuxtLink>
</template>

<style scoped>

</style>
