<script lang="ts" setup>
import FormControl from '~~/components/daisy/FormControl.vue'
</script>

<template>
  <div>
    <DNavbar>
      <template #start>
        <DButton ghost icon="i-mi:filter text-accent">
          <span sr-only md:not-sr-only>Filters</span>
        </DButton>
        <DButton ghost square icon="i-mi:search text-accent" />
        <!-- <FormControl label="Search" icon="i-mi:search ">
          <DaisyTextInput placeholder="Search" />
        </FormControl> -->
      </template>
      <template #center>
        <DButton ghost icon="i-mi:refresh text-accent">
          <span sr-only md:not-sr-only>Items: 100500k</span>
        </DButton>
        <FavoriteCounter />
        <DButton ghost>
          <span>Sort: default</span>
          <DIcon translate-x-1 icon="i-mi:chevron-down" />
        </DButton>
      </template>
      <template #end>
        <DButton accent>
          Buy
        </DButton>
        <ClientOnly>
          <CartForm />
        </ClientOnly>
      </template>
    </DNavbar>
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

<style>

</style>
