<template>
  <BaseApp as="div">
    <BaseApp #header container>
      <BaseNavbar #center>
        <NuxtLink v-for="link in links" v-bind="link"></NuxtLink>
      </BaseNavbar>

      <Suspense>
        <NuxtLayout>
          <NuxtPage></NuxtPage>
        </NuxtLayout>

        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>

      <footer class="footer">
        <NuxtLink v-for="link in links" v-bind="link"></NuxtLink>
      </footer>
    </BaseApp>
  </BaseApp>
</template>

<script setup>
const links = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
];
</script>
