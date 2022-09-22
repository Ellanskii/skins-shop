<script lang="ts" setup>
defineProps<{
  src: string
}>()
</script>

<template>
  <figure aspect-square>
    <img :src="src" alt="" loading="lazy">
  </figure>
</template>

<style scoped>

</style>
