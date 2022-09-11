<script lang="ts" setup></script>

<template>
  <button
    v-for="control in [
      'Filter',
      'Search',
      'Total',
      'Favourite',
      'Sort',
      'Checkout',
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

  <header>
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
  </header>

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

  <!-- <section area-cards grow b-1 b-main border-t-transparent>
      <ul v-if="data" sm:columns-2 md:columns-3xs bg-main class="gap-[1px]">
        <li v-for="item in data.items" :key="item.id" class="bg-[#343646] w-max-sm">
          <article relative p-xs flex flex-col min-h-full bg-card hover:bg-card-100>
            <NuxtLink to="item.id" before="content-none block absolute inset-0">
              <h2>{{ item.fullName }}</h2>
            </NuxtLink>
            <img :src="item.img" width="320" height="240" alt="" />
            <p flex justify-between>
              <span>Float:</span> <span>{{ item.float }}</span>
            </p>
          </article>
        </li>
      </ul>
    </section> -->
</template>

<style scoped></style>
