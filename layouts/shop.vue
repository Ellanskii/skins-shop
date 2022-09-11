<script lang="ts" setup>
const { data } = await useFetch('/api/mock/items')

const { filters } = useUrlSearchParams()
</script>

<template>
  <div class="divide-y divide-main" flex flex-wrap>
    <header grid grid-rows-2 w-full md:flex gap-xs p-sm>
      <div
        class="ui-input w-full"
        border-1
        b-base-600
        relative
        rounded-md
        of-clip
        focus-within="ring-2 ring-offset-2 ring-offset-main ring-orange-600"
      >
        <uno-icon
          i-ic:baseline-search
          h-full
          aspect-square
          absolute
          left-2
          pointer-events-none
          opacity-70
        />
        <input
          placeholder="Поиск"
          px-8
          w-full
          h-full
          bg="base-700 hover:base-600"
          focus-visible="outline-none"
        >
      </div>
      <button
        v-for="control in [
          'Filter',
          'Search',
          'Total',
          'Favourite',
          'Sort',
          'Buy',
          'Cart',
        ]"
        :key="control"
        class="clipped"
        btn
        btn-primary
        bg-opacity-30
        hover:bg-opacity-60
        active:bg-orange-700
        focus-visible="outline-none"
      >
        {{ control }}
      </button>
    </header>

    <section sm:flex>
      <dialog ref="filtersDialog" bg-transparent static m-0 p-0 open>
        <form action="/" name="filters" method="GET" min-w-sm divide-y divide-dark>
          <details v-for="n in 10" :key="n">
            <summary list-none text-white p-sm flex cursor-pointer>
              <legend uppercase>
                Filter {{ n }}
              </legend>
              <uno-icon i-ic:baseline-plus h-6 w-6 ml-a />
            </summary>
            <ul p-sm text-neutral>
              <li v-for="c in 10" :key="c">
                <label flex gap-xs items-center>
                  <input
                    type="checkbox"
                    class="ui-checkbox bg-transparent appearance-none ring-2 ring-current w-3 h-3"
                    :name="`filter-${c}`"
                  >
                  <span>Item {{ c }}</span>
                </label>
              </li>
            </ul>
          </details>
        </form>
      </dialog>

      <section grow b-1 b-main border-t-transparent>
        <ul v-if="data" grid sm:grid-cols-2 md:grid-cols-3 bg-main class="gap-[1px]">
          <li v-for="item in data.items" :key="item.id" class="bg-[#343646] w-max-sm">
            <article
              relative
              p-xs
              flex
              flex-col
              min-h-full
              bg-card
              hover:bg-card-100
            >
              <NuxtLink to="item.id" order-2 before="content-none block absolute inset-0">
                <h2>{{ item.fullName }}</h2>
              </NuxtLink>
              <img :src="item.preview" width="320" height="240" order-1>
            </article>
          </li>
        </ul>
      </section>
    </section>

    <slot />
  </div>
</template>

<style lang="postcss">
  /* .clipped {
    clip-path: polygon(0 0, 0 50%, 1rem 100%, 100% 100%, 100% 50%, 100% 0%);
  } */
  .clipped {
    @apply relative uppercase;
    clip-path: polygon(0 100%, 0 1rem, 1rem 0, 100% 0, 100% 1rem, calc(100% - 1rem) 100%);
  }
  .clipped::before, .clipped::after {
    @apply content-none block absolute border-3 b-orange-600 w-4 h-4
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
