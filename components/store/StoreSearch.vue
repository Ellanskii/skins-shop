<script lang="ts" setup>
const params = useUrlSearchParams('history')
</script>

<template>
  <!-- <DButton></DButton> -->
  <Teleport to="dialog" disabled>
    <DFormControl icon="i-mi:search">
      <DTextInput v-model="params.q" placeholder="Search..." />
    </DFormControl>
  </Teleport>
</template>

<style scoped>

</style>
