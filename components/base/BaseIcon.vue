<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
  icon: string
}>(), {
  as: 'div',
})
</script>

<template>
  <Component :is="as" :class="icon" class="icon-base" />
</template>
