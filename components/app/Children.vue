<script lang="ts" setup>
const links = ['Магазин', 'Обмен', 'Продажа', 'Аукцион']
</script>

<template>
  <ul flex gap-2>
    <li v-for="link in links" :key="link">
      <NuxtLink :to="link" class="btn btn-ghost">
        <div>{{ link }}</div>
      </NuxtLink>
    </li>
  </ul>
</template>
