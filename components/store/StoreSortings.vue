<script lang="ts" setup>
const params = useUrlSearchParams('history', {
  initialValue: {
    sort: 'default'
  }
})
</script>

<template>
  <select class="select select-ghost" v-model="params.sort">
    <option disabled selected value="default">По умолчанию</option>
    <option value="price_min">Цена мин.</option>
    <option value="price_max">Цена макс.</option>
  </select>
</template>

<style scoped></style>
