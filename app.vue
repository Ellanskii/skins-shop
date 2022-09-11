<script setup>
const nav = ['Магазин', 'Обмен', 'Продажа', 'Аукцион']

// const { data: popular } = useFetch("/api/products");
</script>

<template>
  <div min-h-screen bg-base>
    <TheHeader />
    <NuxtLayout rounded-t-lg sm:mx-sm class="bg-[#343646]">
      <!-- <NuxtPage /> -->
    </NuxtLayout>
    <footer min-h-32 class="bg-[#191919]" />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #242636;
  color: white;
}
</style>
