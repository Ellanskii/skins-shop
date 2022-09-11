<script lang="ts" setup></script>

<template>
  <BaseNavbar as="header">
    <template #start>
      <h1 class="p-sm font-2xl font-mono font-black">
        <span>LOOT</span><span text-orange-600>.SERF</span>
      </h1>
    </template>
  </BaseNavbar>
</template>

<style scoped lang="postcss">
.navbar {
  @apply flex items-center;
}
:where(.navbar > *) {
  @apply inline-flex items-center;
}
.navbar-start {
  width: 50%;
  justify-content: flex-start;
}
.navbar-center {
  flex-shrink: 0;
}
.navbar-end {
  width: 50%;
  justify-content: flex-end;
}
</style>
