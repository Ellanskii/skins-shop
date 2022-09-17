<script setup lang="ts">
</script>

<template>
  <!-- Common for all routes, including nested apps -->
  <AppHeader container mx-auto>
    <!-- Master App Logo, linking to homepage -->
    <!-- Skip Navigation button, pointing directly to the main content -->
    <!-- Main Navigation between child apps -->
    <!-- FAQ? -->
    <!-- User-related controls: locale, theme, auth -->
  </AppHeader>

  <!-- Default layout for current app – some legal bullshit along with "about us" -->
  <NuxtLayout container mx-auto rounded-t-md of-clip bg-base>
    <!-- Custom layout is basicaly nested app with it's own navigation and logic -->
    <NuxtPage />
  </NuxtLayout>

  <div bg-dark-900 pt-lg pb-2xl>
    <AppFooter container mx-auto>
      <!-- Master App Logo -->
      <!-- Some links nobody looking for -->
      <!-- Anchor link 'to top' -->
    </AppFooter>
  </div>
</template>

<style lang="postcss">
@import "@kidonng/daisyui/index.css";
/* @import "@kidonng/daisyui/base/index.css";
@import "@kidonng/daisyui/utilities/index.css";
@import "@kidonng/daisyui/themes/auto.css"; */
</style>
