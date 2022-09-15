<script lang="ts" setup></script>

<template>
  <div>
    <AppHeader />
    <div class="drawer">
      <input id="left-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content">
        <NuxtPage container mx-auto />

        <label for="left-drawer" class="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="left-drawer" class="drawer-overlay" />
        <ul class="menu p-4 overflow-y-auto w-80 bg-base">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
