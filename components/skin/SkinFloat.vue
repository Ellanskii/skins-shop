<script lang="ts" setup>
defineProps<{
  float: number
}>()
</script>

<template>
  <div class="skin-float" :style="`--float: ${float * 100}%`">
    <span>Float</span>
    <span>{{ float }}</span>
  </div>
</template>

<style lang="postcss">
.skin-float {
  @apply relative flex flex-wrap gap-3 justify-between;
}

.skin-float::before {
  @apply content-none block h-2 w-full my-2 rounded-sm;
  background-image: linear-gradient(to right, #3D818F 7%, #35B23A 7%, #35B23A 15%, #DFC04A 15%, #DFC04A 38%, #EF8641 38%, #EF8641 45%, #EB5757 45%);
}

.skin-float::after {
  @apply content-none block h-6 w-1 bg-white shadow-lg absolute;
  left: var(--float, 0)
}
</style>
