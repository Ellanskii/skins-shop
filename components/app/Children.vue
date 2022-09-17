<script lang="ts" setup>
const links = ['Магазин', 'Обмен', 'Продажа', 'Аукцион']
</script>

<template>
  <DaisyMenu horizontal>
    <NuxtLink v-for="link in links" :key="link" :to="link">
      {{ link }}
    </NuxtLink>
  </DaisyMenu>
</template>

<style scoped>

</style>
