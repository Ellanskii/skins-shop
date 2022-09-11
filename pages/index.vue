<script lang="ts" setup>
definePageMeta({
  layout: 'shop',
})
</script>

<template>
  <main flex flex-col gap-4 font-mono>
    <div
      class="hero"
      min-h-screen
      style="background-image: url(https://placeimg.com/1000/800/arch)"
    >
      <div container mx-auto w-full>
        <header flex flex-col gap-4>
          <h1>
            <span font-black text-xl>К бою готов?</span><br>
            <span>Собери коллекцию топовых скинов для красивой игры</span>
          </h1>
          <div>
            <NuxtLink to="#" class="btn btn-primary">
              Начать
            </NuxtLink>
          </div>
        </header>
      </div>
    </div>

    <!-- <template v-if="data">
      <section v-for="block in data.blocks">
        <header :id="block.slot">
          <h2 class="triple-shadow" text="2xl md:[3rem] lg:[4rem]" capitalize>
            {{ block.title }}
          </h2>
        </header>
        <slot :name="block.slot"></slot>
      </section>
    </template>

    <section v-if="data">
      <header>
        <h2 class="triple-shadow" text-2xl>Популярное</h2>
      </header>
      <ui-carousel>
        <template v-for="item in data.blocks[0].items">
          <NuxtLink :to="`/shop/${item.id}`" #slide="{ id, img, name }">
            <img :src="img" alt="" width="350" height="350" />
            <span>{{ name }}</span>
          </NuxtLink>
        </template>
      </ui-carousel>
      <ul flex overflow-x-scroll snap="x mandatory">
        <li v-for="item in data.blocks[0].items" flex-none snap-start>
          <PopularProduct></PopularProduct>
        </li>
      </ul>
      <footer>
        <ui-button bg-red border-2 border-greeen>В магазин</ui-button>
      </footer>
    </section> -->

    <section container mx-auto w-full>
      <header>
        <h2 class="triple-shadow" text-2xl>
          О нас
        </h2>
      </header>
      <div class="cyberpunk">
        <div
          p="x-12 y-16"
          md:p="x-24 y-24"
          lg:p="x-48 y-48"
          flex
          gap-4
          style="
            background-image: url(./about_us_section.svg);
            background-size: 100% 100%;
          "
        >
          <div>LOGO</div>
          <div border-64 p-4 bg-gradient-to-b from-purple-500 to-blue-700 font-mono>
            Это площадка для быстрого обмена и продажи виртуальных предметов из популярных
            игр: CS:GO, Dota 2, RUST, Team Fortress. Платформа построина на блокчейне и
            позволяет моментально проводить более миллиона сделок в онлайне, позволяя
            безопасно зарабатывать на внутриигровых предметах.
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="postcss">
.cyberpunk {
  width: calc(100% - 30px);
  border: 30px solid #000;
  border-left: 5px solid #000;
  border-right: 5px solid #000;
  border-bottom: 15px solid #000;
  clip-path: polygon(0px 25px, 26px 0px, calc(60% - 25px) 0px, 60% 25px, 100% 25px, 100% calc(100% - 10px), calc(100% - 15px) calc(100% - 10px), calc(80% - 10px) calc(100% - 10px), calc(80% - 15px) calc(100% - 0px), 10px calc(100% - 0px), 0% calc(100% - 10px));
  padding: 12px;
}
.triple-shadow {
  margin-top: 1em;
  text-shadow: 0px -0.5em 0px #242636, 0px -0.5em 1px rgba(255, 255, 255, 1),
    0px -1em 0px #242636, 0px -1em 1px rgba(255, 255, 255, 0.5);
}
</style>
