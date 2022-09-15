<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
  primary?: boolean
  accent?: boolean
  circle?: boolean
}>(), {
  as: 'button',
})
</script>

<template>
  <Component
    :is="as" class="btn" :class="{
      'btn-primary': primary,
      'btn-accent': accent,
      'btn-circle': circle,
    }"
  >
    <slot />
  </Component>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/button.css';
@import '@kidonng/daisyui/components/styled/button.css';
</style>
