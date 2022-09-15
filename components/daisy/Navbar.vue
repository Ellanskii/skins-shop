<script lang="ts" setup></script>

<template>
  <div class="navbar">
    <div class="navbar-start">
      <slot name="start" />
    </div>
    <div class="navbar-center">
      <slot>
        <slot name="center" />
      </slot>
    </div>
    <div class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/navbar.css';
@import '@kidonng/daisyui/components/styled/navbar.css';
</style>
