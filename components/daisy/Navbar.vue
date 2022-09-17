<script lang="ts" setup></script>

<template>
  <div class="navbar">
    <slot>
      <div class="navbar-start">
        <slot name="start" />
      </div>
      <div class="navbar-center">
        <slot name="center" />
      </div>
      <div class="navbar-end">
        <slot name="end" />
      </div>
    </slot>
  </div>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/navbar.css';
@import '@kidonng/daisyui/components/styled/navbar.css';
</style>
