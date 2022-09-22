<script lang="ts" setup></script>

<template>
  <div>
    <DButton><span sr-only md:not-sr-only>App Select</span></DButton>
    <DButton><DIcon icon="i-mi:filter text-primary" /><span sr-only md:not-sr-only>Filters</span></DButton>
    <DButton><DIcon icon="i-mi:search text-primary" /><span sr-only md:not-sr-only>Search</span></DButton>
    <DButton><DIcon icon="i-mi:refresh text-primary" /><span sr-only md:not-sr-only>Refresh</span></DButton>
    <DButton><DIcon icon="i-mi:sort text-primary" /><span sr-only md:not-sr-only>Sort</span></DButton>
    <DButton><DIcon icon="i-mi:heart text-primary" /><span sr-only md:not-sr-only>Favorites</span></DButton>
    <DButton><DIcon icon="i-mi:shopping-cart text-primary" /><span sr-only md:not-sr-only>Cart</span></DButton>
  </div>
</template>

<style scoped></style>
