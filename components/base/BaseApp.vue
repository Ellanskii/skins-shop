<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div',
  },
)
</script>

<template>
  <Component :is="as" min-h-screen bg-base>
    <slot name="header" />
    <slot name="drawer" />
    <slot name="page" />
    <slot name="footer" />
  </Component>
</template>
