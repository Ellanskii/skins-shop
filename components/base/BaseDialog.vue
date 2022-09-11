<script lang="ts" setup>
withDefaults(
  defineProps<{
    as: string
  }>(),
  {
    as: 'dialog',
  },
)
</script>

<template>
  <Component :is="as" class="dialog-base" />
</template>
