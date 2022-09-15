<script lang="ts" setup></script>

<template>
  <div class="hero">
    <div class="hero-content">
      <div class="prose">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.hero.bg-main.avif {
  background-image: url(~/assets/main_bg.avif);
}
.triple-shadow {
  text-shadow: 0px -0.5em 0px #242636, 0px -0.5em 1px rgba(255, 255, 255, 1),
    0px -1em 0px #242636, 0px -1em 1px rgba(255, 255, 255, 0.5);
}
</style>
