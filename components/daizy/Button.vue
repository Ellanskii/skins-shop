<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
  theme?: 'primary' | 'accent'
}>(), {
  as: 'button'
})
</script>

<template>
  <div class="btn" :class="{
    'btn-primary': theme === 'primary'
  }">
    <slot>
      Component: daizy/Button
    </slot>
  </div>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/button.css';
@import '@kidonng/daisyui/components/styled/button.css';
</style>
