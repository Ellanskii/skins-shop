<script lang="ts" setup>
const [open, toggle] = useToggle()
</script>

<template>
  <details :open="open" class="details">
    <summary class="details-summary" list-none>
      <slot name="summary" v-bind="{ open, toggle }"></slot>
    </summary>

    <div class="details-content">
      <slot name="default"></slot>
    </div>
  </details>
</template>

<style lang="postcss">
.summary-icon {
  @apply i-mdi:plus;
}

:where([open]) .summary-icon {
  @apply i-mdi:minus;
}
</style>
