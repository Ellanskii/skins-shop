<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="icon" :class="icon">
    <slot></slot>
  </div>
</template>
