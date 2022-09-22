<script lang="ts" setup>
const cart = useCartStore()
</script>

<template>
  <DButton as="label" for="cart-modal" class="indicator modal-button">
    <DIcon icon="i-mi:shopping-cart" />
    <span sr-only md:not-sr-only>Shopping cart</span>
    <span class="indicator-item badge badge-primary">{{ cart.total }}</span>
  </DButton>

  <input id="cart-modal" type="checkbox" class="modal-toggle">

  <div open class="modal">
    <aside class="modal-box relative">
      <h2 text-lg font-bold>
        Products in cart: <span text-accent>{{ cart.total }}</span>
      </h2>
      <div v-for="product in cart.all">
        {{ product }}
      </div>
    </aside>
  </div>
</template>

<style scoped>

</style>
