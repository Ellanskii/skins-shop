<script lang="ts" setup>
withDefaults(defineProps<{
  as: string
}>(), {
  as: 'button',
})
</script>

<template>
  <Component :is="as" class="button-base transition-base focus-base">
    <slot />
  </Component>
</template>
