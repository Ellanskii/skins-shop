<script lang="ts" setup>
const props = defineProps<{
  price: number
  overprice?: number
}>()

const price = computed(() => useCeil(props.price * 65).value.toLocaleString())
</script>

<template>
  <d-indicator>
    <d-badge
      v-if="overprice"
      sm
      :success="overprice > 0"
      :warning="overprice < 0"
      class="indicator-item indicator-start !rounded-sm"
    >
      {{ `${overprice}%` }}
    </d-badge>
    <p after="content-[₽] ml-1">
      {{ price }}
    </p>
  </d-indicator>
</template>

<style lang="postcss">
.badge-success {
  @apply !text-green-600 !bg-green-900/80;
}
.badge-warning {
  @apply !text-orange-600 !bg-[#4B2A1D];
}
</style>

