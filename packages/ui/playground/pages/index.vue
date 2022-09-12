<script lang="ts" setup>
const { data } = useFetch("/api/article");
</script>

<template>
  <article prose>
    <header class="hero"></header>
    <pre>{{ data }}</pre>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
