<script lang="ts" setup>
withDefaults(
  defineProps<{
    as?: string
    compact?: boolean
    vertical?: boolean
    horizontal?: boolean
  }>(),
  {
    as: 'ul',
  },
)
</script>

<template>
  <Component
    :is="as" v-if="$slots.default" class="menu" :class="{
      'menu-compact': compact,
      'menu-horizontal': horizontal,
      'menu-vertical': vertical,
    }"
  >
    <!-- FIXME Just do not want to mess with recursion -->
    <template v-for="(item, index) in $slots.default()">
      <template v-if="item.children?.length">
        <li v-for="(child, childIndex) in item.children" :key="childIndex">
          <Component :is="child" />
        </li>
      </template>

      <li v-else :key="index">
        <Component :is="item" />
      </li>
    </template>
  </Component>
</template>

<style lang="postcss">
@import "@kidonng/daisyui/components/unstyled/menu.css";
@import "@kidonng/daisyui/components/styled/menu.css";
</style>
