<script lang="ts" setup>
const links = ["Магазин", "Обмен", "Продажа", "Аукцион"];
</script>

<template>
  <BaseNavbar as="nav">
    <template #start>
      <img src="~/assets/logo.svg" alt="" />
    </template>

    <menu class="navbar-center gap-sm">
      <li v-for="link in links" :key="link">
        <NuxtLink v-text="link" :to="link" />
      </li>
    </menu>

    <template #end>
      <button class="btn btn-circle"></button>
      <div>
        <button class="btn">Register</button>
        <button class="btn btn-accent">Log in</button>
      </div>
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
