<script lang="ts" setup>
defineProps<{
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  link?: boolean
  ghost?: boolean
  outline?: boolean
}>()
</script>

<template>
  <div class="badge" :class="{
    'badge-primary': primary,
    'badge-secondary': secondary,
    'badge-accent': accent,
    'badge-info': info,
    'badge-success': success,
    'badge-warning': warning,
    'badge-error': error,
    'badge-link': link,
    'badge-ghost': ghost,
    'badge-outline': outline,
  }">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
