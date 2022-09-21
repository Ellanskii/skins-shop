<script lang="ts" setup>
definePageMeta({
  // layout: 'drawer',
})

const { data } = await useFetch('/api/mock/items')
const { data: items } = await useFetch('/api/prices/class_instance/RUB')
// const { has, add, remove } = useCartStore()
</script>

<template>
  <!-- <div>
    <form name="store-search"></form>
    <DButton><span sr-only md:not-sr-only>App Select</span></DButton>
    <DButton icon="i-mi:search text-primary" square relative>
      <DBadge class="absolute -right-2 -top-2" secondary aspect-square text-xs>3</DBadge>
    </DButton>
    <DButton icon="i-mi:search text-primary" square relative>
      <DBadge class="absolute -right-2 -top-2" secondary aspect-square text-xs>3</DBadge>
    </DButton>
    <DButton>
      <DIcon icon="i-mi:filter text-primary" /><span sr-only md:not-sr-only>Filters</span>
    </DButton>
    <DButton>
      <DIcon icon="i-mi:sort text-primary" /><span sr-only md:not-sr-only>Sort</span>
    </DButton>
    <DButton>
      <DIcon icon="i-mi:refresh text-primary" /><span sr-only md:not-sr-only>Refresh</span>
    </DButton>
    <DButton>
      <DIcon icon="i-mi:heart text-primary" /><span sr-only md:not-sr-only>Favorites</span>
    </DButton>
    <DButton>
      <DIcon icon="i-mi:shopping-cart text-primary" /><span sr-only md:not-sr-only>Cart</span>
    </DButton>
  </div> -->
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

  <ul v-if="data" class="grid" grid="cols-2 sm:cols-3 md:cols-4 lg:cols-5 xl-cols-6 2xl:cols-7" gap="1px" bg-base>
    <li v-for="item in data.items" :key="item.id">
      <ProductCard
        :product="item"
        h-full
        bg-base-100
        before="content-none block absolute inset-0 shadow-2xl opacity-0 pointer-events-none border-1 b-base"
        hover="scale-110 z-10 before:opacity-100" transition
      />
    </li>
  </ul>
</template>

<style>
.clipped {
  @apply relative uppercase;
  clip-path: polygon(0 100%, 0 1rem, 1rem 0, 100% 0, 100% 1rem, calc(100% - 1rem) 100%);
}

.clipped::before,
.clipped::after {
  @apply content-none block absolute border-3 w-4 h-4;
}

.clipped::before {
  left: 0;
  bottom: 0;
  border-right: 0;
  border-top: 0;
}

.clipped::after {
  right: 0;
  top: 0;
  border-left: 0;
  border-bottom: 0;
}
</style>
