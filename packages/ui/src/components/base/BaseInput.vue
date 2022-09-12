<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    icon?: string
    disabled?: boolean
    type?: string
  }>(),
  {
    modelValue: '',
    disabled: false,
    type: 'text',
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const input = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div class="text-input-base bg-base focus-within:focus-base focus-within:border-context border border-base flex items-center">
    <slot name="icon">
      <NIcon v-if="icon" :icon="icon" class="mr-0.4em text-1.1em op50" />
    </slot>
    <input
      v-model="input"
      class="!outline-none flex-auto bg-base"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>
