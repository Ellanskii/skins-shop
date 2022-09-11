<template>
  <base-app rounded-t-lg sm:mx-sm class="bg-[#343646]">
    <template #header>
      <slot name="header" />
    </template>

    <template #drawer />

    <slot name="filters" />
    <slot name="results" />

    <template #page />
  </base-app>
</template>
