<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
    normal?: boolean
    compact?: boolean
    side?: boolean
  }>(),
  {
    as: 'article',
  },
)
</script>

<template>
  <Component
    :is="as" class="card" :class="{
      'card-normal': normal,
      'card-compact': compact,
      'card-side': side,
    }"
  >
    <slot>
      <figure class="card-img">
        <slot name="img" />
      </figure>
      <div class="card-body">
        <header class="card-title">
          <slot name="title" />
        </header>
        <slot />
        <div class="card-actions">
          <slot name="actions" />
        </div>
      </div>
    </slot>
  </Component>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/card.css';
@import '@kidonng/daisyui/components/styled/card.css';
</style>
