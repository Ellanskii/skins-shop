<script lang="ts" setup>
const favorite = useFavoriteStore()
const count = computed(() => favorite.total)
</script>

<template>
<DBadge v-if="count > 0">{{ count }}</DBadge>
</template>
