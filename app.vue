<script setup>
const nav = ["Магазин", "Обмен", "Продажа", "Аукцион"];

// const { data: popular } = useFetch("/api/products");
</script>

<template>
  <!-- Common for all routes, including nested apps -->
  <TheHeader>
    <!-- Master App Logo, linking to homepage -->
    <!-- Skip Navigation button, pointing directly to the main content -->
    <!-- Main Navigation between child apps -->
    <!-- FAQ? -->
    <!-- User-related controls: locale, theme, auth -->
  </TheHeader>

  <!-- Default layout for current app – some legal bullshit along with "about us" -->
  <NuxtLayout>
    <!-- Custom layout is basicaly nested app with it's own navigation and logic -->
    <NuxtPage />
  </NuxtLayout>

  <TheFooter>
  <!-- Master App Logo -->
  <!-- Some links nobody looking for -->
  <!-- Anchor link 'to top' -->
  </TheFooter>

  <NuxtLayout>
    <NuxtChild></NuxtChild>
  </NuxtLayout>
</template>

<style lang="postcss">
@import "@kidonng/daisyui/index.css";
@import "@kidonng/daisyui/base/index.css";

@import "@kidonng/daisyui/components/unstyled/button.css";
@import "@kidonng/daisyui/components/styled/button.css";

@import "@kidonng/daisyui/components/unstyled/hero.css";
@import "@kidonng/daisyui/components/styled/hero.css";

@import "@kidonng/daisyui/utilities/index.css";

@import "@kidonng/daisyui/themes/auto.css";

/* html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #242636;
  color: white;
} */
</style>
