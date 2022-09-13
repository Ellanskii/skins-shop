<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
    container: boolean
  }>(),
  {
    as: 'div',
    container: false
  },
)
</script>

<template>
  <Component :is="as" class="navbar gap-4" :class="[container && 'container mx-auto']">
    <div class="navbar-start gap-2">
      <slot name="start" />
    </div>
    <slot></slot>
    <div class="navbar-center gap-2">
      <slot name="center" />
    </div>
    <div class="navbar-end gap-2">
      <slot name="end" />
    </div>
  </Component>
</template>
