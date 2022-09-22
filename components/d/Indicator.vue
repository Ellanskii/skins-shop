<script lang="ts" setup>
defineProps<{
  value?: string | number
}>()
</script>

<template>
  <div class="indicator">
    <slot name="indicator-item">
      <DBadge v-if="value" secondary>
        {{ value }}
      </DBadge>
    </slot>
    <slot />
  </div>
</template>

<style scoped></style>
