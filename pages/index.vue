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
        <h2>Популярное</h2>
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
    <Suspense>
      
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </main>
</template>
