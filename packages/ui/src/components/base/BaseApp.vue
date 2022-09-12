<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string;
  }>(),
  {
    as: "div",
  }
);
</script>

<template>
  <Component :is="as">
    <slot name="header" />
    <slot name="drawer" />
    <slot name="default" />
    <slot name="footer" />
  </Component>
</template>
