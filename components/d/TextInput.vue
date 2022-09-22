<script lang="ts" setup>
withDefaults(defineProps<{
  type?: string

  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}>(), {
  type: 'text',
})
</script>

<template>
  <input
    :type="type" class="input" :class="{
      'input-primary': primary,
      'input-secondary': secondary,
      'input-accent': accent,
      'input-info': info,
      'input-success': success,
      'input-warning': warning,
      'input-error': error,
    }"
  >
</template>

<style lang="postcss">
@import '@kidonng/daisyui/components/unstyled/input.css';
@import '@kidonng/daisyui/components/styled/input.css';
</style>
