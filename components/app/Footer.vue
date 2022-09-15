<script lang="ts" setup>
const socials = ['i-mdi:facebook', 'i-mdi:vk-circle', 'i-mdi:instagram']
</script>

<template>
  <DaisyNavbar as="footer" gap-sm>
    <div class="navbar-start">
      <AppLogo />
    </div>

    <ul class="navbar-center gap-xs">
      <li v-for="social in socials" :key="social">
        <DaisyButton circle accent class="btn-sm">
          <UnoIcon :class="social" h-6 w-6 />
        </DaisyButton>
      </li>
    </ul>

    <div class="navbar-end">
      <DaisyButton as="a" link to="#top">
        <span>To top</span>
        <DaisyIcon icon="i-mdi:chevron-double-up" class="text-accent icon-btn" />
      </DaisyButton>
    </div>
  </DaisyNavbar>
</template>
