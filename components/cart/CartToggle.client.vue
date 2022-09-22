<script lang="ts" setup>
const props = defineProps<{
  id: number
}>()

const { has, add, remove } = useCartStore()
const button = computed(() => has(props.id) ? ({
  onClick: () => remove(props.id),
  // icon: 'i-mdi:cart-minus',
  text: 'Remove from cart',
}) : ({
  onClick: () => add(props.id),
  // icon: 'i-mdi:cart',
  text: 'Add to cart',
}))
</script>

<template>
  <DButton accent block v-bind="{ ...button }">
    <span>{{ button.text }}</span>
  </DButton>
</template>
