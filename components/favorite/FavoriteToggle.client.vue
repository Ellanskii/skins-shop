<script lang="ts" setup>
defineProps<{
  id: number
}>()

const { has, add, remove } = useFavoriteStore()
</script>

<template>
  <DaisyButton v-if="has(id)" square icon="i-mdi:heart" @click="remove(id)">
    <span sr-only>Remove from favorites</span>
  </DaisyButton>
  <DaisyButton v-else square icon="i-mdi:heart-outline" @click="add(id)">
    <span sr-only>Add to favorites</span>
  </DaisyButton>
</template>
