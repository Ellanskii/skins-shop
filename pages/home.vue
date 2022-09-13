<script lang="ts" setup>
// const { data } = useAsyncData("pages/home", () => useStrapi4().findOne('pages', 9, {
//   populate: 'deep,4'
// }));
// const { data } = await useAsyncData('home', () => queryContent('home').findOne())

// definePageMeta({});
// const data = await queryContent('/hello').find()
</script>

<template>
  <main>

    <ContentDoc />

    <!-- <ContentRenderer :value="data" /> -->
  </main>
</template>

<style scoped lang="postcss">
.cyberpunk {
  width: calc(100% - 30px);
  border: 30px solid #000;
  border-left: 5px solid #000;
  border-right: 5px solid #000;
  border-bottom: 15px solid #000;
  clip-path: polygon(
    0px 25px,
    26px 0px,
    calc(60% - 25px) 0px,
    60% 25px,
    100% 25px,
    100% calc(100% - 10px),
    calc(100% - 15px) calc(100% - 10px),
    calc(80% - 10px) calc(100% - 10px),
    calc(80% - 15px) calc(100% - 0px),
    10px calc(100% - 0px),
    0% calc(100% - 10px)
  );
  padding: 12px;
}
.triple-shadow {
  margin-top: 1em;
  text-shadow: 0px -0.5em 0px #242636, 0px -0.5em 1px rgba(255, 255, 255, 1),
    0px -1em 0px #242636, 0px -1em 1px rgba(255, 255, 255, 0.5);
}
</style>
