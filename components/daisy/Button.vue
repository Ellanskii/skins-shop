<script lang="ts" setup>
withDefaults(defineProps<{
  as?: string
  primary?: boolean
  accent?: boolean
  link?: boolean
  ghost?: boolean

  block?: boolean
  circle?: boolean

  icon?: string
}>(), {
  as: 'button',
})
</script>

<template>
  <Component
    :is="as" class="btn" :class="{
      'btn-primary': primary,
      'btn-accent': accent,
      'btn-link': link,
      'btn-ghost': ghost,
      'btn-block': block,
      'btn-circle': circle,
    }"
  >
    <slot name="icon">
      <DaisyIcon v-if="icon" :icon="icon" class="btn-icon" />
    </slot>
    <slot />
  </Component>
</template>

<style lang="postcss">
@import '@kidonng/daisyui/components/unstyled/button.css';
@import '@kidonng/daisyui/components/styled/button.css';

.btn-icon {
  @apply h-5 w-5 -translate-x-1;
}
</style>
