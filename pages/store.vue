<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = breakpoints.isGreater('md')


const { data } = await useFetch('/api/mock/items')
const { data: items } = await useFetch('/api/prices/class_instance/RUB')
// const { has, add, remove } = useCartStore()
const drawerEl = $(ref<HTMLDialogElement>())

const { isRevealed, onCancel, onReveal, reveal, cancel } = useConfirmDialog()
onReveal(() => isDesktop ? drawerEl?.show() : drawerEl?.showModal())
onCancel(() => drawerEl?.close())


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
  <main divide-y divide-base>
    <DNavbar gap-xs>
      <form class="navbar-start contents" name="products" action="/" method="GET" @submit.prevent>
        <StoreFilters />
        <StoreSortings />
        <StoreSearch />
        <DButton ghost icon="i-mi:refresh text-accent">
          <span sr-only md:not-sr-only class="tooltip" data-tip="Refresh">Результатов: 428k</span>
        </DButton>
      </form>






      <DButton ghost ml-a>
        <div class="indicator">
          <FavoriteCounter sm primary class="indicator-item" />
          <DIcon icon="i-mi:heart text-accent" />
        </div>
        <span sr-only md:not-sr-only>Favorites</span>
      </DButton>


      <DButton accent>
        Buy
      </DButton>
      <CartForm />

    </DNavbar>



    <div flex>
      <div ref="drawerEl" static m-0 p-0>
        <aside bg-base-900 id="drawer"></aside>
      </div>
      <ul v-if="data" class="grid" grid="cols-2 sm:cols-3 md:cols-4 lg:cols-5 xl-cols-6 2xl:cols-7" gap="1px" bg-base>
        <li v-for="item in data.items" :key="item.id">
          <ProductCard :product="item" h-full bg-base-100
            before="content-none block absolute inset-0 shadow-2xl opacity-0 pointer-events-none border-1 b-base"
            hover="scale-110 z-10 before:opacity-100" transition />
        </li>
      </ul>
    </div>
  </main>



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
