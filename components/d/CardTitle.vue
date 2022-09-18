<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'h1',
  },
)
</script>

<template>
  <Component :is="as">
    <slot></slot>
  </Component>
</template>

<style scoped>

</style>
