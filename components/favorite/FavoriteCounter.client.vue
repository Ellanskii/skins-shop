<script lang="ts" setup>
const favorite = useFavoriteStore()
const count = computed(() => favorite.total)
</script>

<template>
  <DaisyButton class="indicator" ghost icon="i-mi:heart text-accent">
    <span class="indicator-item badge badge-secondary">{{ count }}</span>
    <span sr-only md:not-sr-only>Favorites</span>
  </DaisyButton>
</template>
