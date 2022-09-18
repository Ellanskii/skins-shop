<script lang="ts" setup>
defineProps<{
  label?: string
  icon?: string
}>()
</script>

<template>
  <div class="form-control">
    <slot name="label">
      <label v-if="label" class="label"><span class="label-text">{{ label }}</span></label>
    </slot>
    <div relative>
      <slot name="icon">
        <DIcon v-if="icon" :icon="icon" class="input-icon h-5 w-5 absolute" />
      </slot>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
