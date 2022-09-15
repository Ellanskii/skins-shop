<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
}>(), {
  as: 'button',
})
</script>
  
<template>
  <Component :is="as" class="btn">
    <slot />
  </Component>
</template>

<style>
@import '@kidonng/daisyui/utilities/unstyled/button.css';
</style>

