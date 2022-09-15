<script lang="ts" setup>
const links = ["Магазин", "Обмен", "Продажа", "Аукцион"];
</script>

<template>
  <DaizyNavbar as="nav">
    <template #start>
      <img src="~/assets/logo.svg" alt="" />
    </template>

    <ul class="navbar-center gap-sm">
      <li v-for="link in links" :key="link">
        <NuxtLink :to="link">{{ link }}</NuxtLink>
      </li>
    </ul>

    <template #end>
      <button class="btn btn-circle"></button>
      <div>
        <button class="btn">Register</button>
        <button class="btn btn-accent">Log in</button>
      </div>
    </template>
  </DaizyNavbar>
</template>