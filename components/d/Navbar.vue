<script lang="ts" setup></script>

<template>
  <div class="navbar">
    <slot>
      <div class="navbar-start gap-2">
        <slot name="start" />
      </div>
      <div class="navbar-center gap-2">
        <slot name="center" />
      </div>
      <div class="navbar-end gap-2">
        <slot name="end" />
      </div>
    </slot>
  </div>
</template>

<style>
@import '@kidonng/daisyui/components/unstyled/navbar.css';
@import '@kidonng/daisyui/components/styled/navbar.css';
</style>
