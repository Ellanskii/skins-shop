<script lang="ts" setup>
const socials = ['i-mdi:facebook', 'i-mdi:vk-circle', 'i-mdi:instagram']
</script>

<template>
  <DNavbar as="footer" gap-sm>
    <div class="navbar-start">
      <AppLogo />
    </div>

    <ul class="navbar-center gap-xs">
      <li v-for="social in socials" :key="social">
        <DButton circle accent class="btn-sm">
          <UnoIcon :class="social" h-6 w-6 />
        </DButton>
      </li>
    </ul>

    <div class="navbar-end">
      <DButton as="a" link href="#top" icon="i-mi:chevron-double-up text-accent">
        To top
      </DButton>
    </div>
  </DNavbar>
</template>
