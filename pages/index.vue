<template>
  <main>
    <header min-h-screen>
      <h1>
        <p>К бою готов?</p>
        <p>Собери коллекцию топовых скинов для красивой игры</p>
      </h1>
      <NuxtLink>Начать</NuxtLink>
    </header>
    <section>
      <header>
        <h2 class="triple-shadow" text-2xl>
          Популярное
        </h2>
      </header>
      <ul>
        <li v-for="n in 10">
          <article>
            <h3>Integrale</h3>
          </article>
        </li>
      </ul>
      <footer>
        <NuxtLink>В магазин</NuxtLink>
      </footer>
    </section>
  </main>
</template>

<style>
.triple-shadow {
  text-shadow:
    0px -0.5em 0px #242636,
    0px -0.5em 1px rgba(255,255,255,1),
    0px -1em 0px #242636,
    0px -1em 1px rgba(255,255,255,0.5);
}
</style>
