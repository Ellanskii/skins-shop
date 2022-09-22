<script lang="ts" setup>
defineProps<{
  label?: string
  icon?: string
}>()
</script>

<template>
  <div class="form-control group">
    <slot name="label">
      <label v-if="label" class="label"><span class="label-text">{{ label }}</span></label>
    </slot>
    <div relative>
      <slot name="icon">
        <DIcon v-if="icon" :icon="icon" class="input-icon h-5 w-5 absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none" opacity-50 group-hover="opacity-100" />
      </slot>
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
input:where(.input-icon ~ input) {
  padding-left: 2rem !important;
}
</style>
