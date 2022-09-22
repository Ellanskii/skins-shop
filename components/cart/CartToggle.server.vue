<script lang="ts" setup>
defineProps<{
  id: number
}>()

const { has, add, remove } = useCartStore()
</script>

<template>
  <DButton block accent icon="i-mdi:cart">
    <span>Add to cart</span>
  </DButton>
</template>
