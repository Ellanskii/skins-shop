<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: 'div'
  },
)
</script>

<template>
  <Component :is="as" class="navbar">
    <div class="navbar-start">
      <slot name="start" />
    </div>
    <slot></slot>
    <div class="navbar-center">
      <slot name="center" />
    </div>
    <div class="navbar-end">
      <slot name="end" />
    </div>
  </Component>
</template>
