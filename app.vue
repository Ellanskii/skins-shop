<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
})

const links = ['Магазин', 'Обмен', 'продажа', 'аукцион']

// const { data: popular } = useFetch("/api/products");
</script>

<template>
  <div min-h-screen bg-base>
    <header h-12 mx-sm>
      <h1 class="p-sm font-2xl font-mono font-black">
        <span>LOOT</span><span text-orange-600>.SERF</span>
      </h1>
    </header>
    <NuxtLayout name="shop" rounded-t-lg sm:mx-sm class="bg-[#343646]">
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
