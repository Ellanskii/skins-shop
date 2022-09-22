<script lang="ts" setup>
withDefaults(defineProps<{
  as?: string
  // Color
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean

  link?: boolean
  ghost?: boolean

  block?: boolean
  circle?: boolean
  square?: boolean

  icon?: string

  lg?: boolean
  md?: boolean
  sm?: boolean
  xs?: boolean
}>(), {
  as: 'button',
})
</script>

<template>
  <Component :is="as" class="btn gap-1" :class="{
    'btn-primary': primary,
    'btn-secondary': secondary,
    'btn-accent': accent,
    'btn-info': info,
    'btn-success': success,
    'btn-warning': warning,
    'btn-error': error,
    'btn-link': link,
    'btn-ghost': ghost,
    'btn-block': block,
    'btn-circle': circle,
    'btn-square': square,
    'btn-lg': lg,
    'btn-md': md,
    'btn-sm': sm,
    'btn-xs': xs,
  }">
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" class="btn-icon h-5 w-5" />
    </slot>
    <slot />
  </Component>
</template>

<style lang="postcss">
/* @import '@kidonng/daisyui/components/unstyled/button.css';
@import '@kidonng/daisyui/components/styled/button.css'; */

/* .btn-icon {
  @apply h-5 w-5;
} */
</style>
