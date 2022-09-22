<script lang="ts" setup>
  const props = defineProps<{ product: any }>()
  
  const favorite = useFavoriteStore()
  const cart = useCartStore()
  </script>
  
  <template>
    <DCard compact class="!rounded-0 group">
      <ProductCover :src="product.img" />
      <div class="card-body">
        <div class="card-title" justify-center>
          <ProductPrice :price="product.price" :overprice="product.overprice" text-2xl />
        </div>
        <span>
          <span>{{ product.rarity }}</span> /
          <span uppercase>{{ product.quality }}</span>
        </span>
        <h1 class="card-title">
          <ProductLink :id="product.id" :name="product.fullName" />
        </h1>
  
        <SkinFloat :float="product.float" mt-a />
  
        <div class="card-actions">
          <div w-full hidden group-hover="block">
            <DButton v-if="cart.has(product.id)" block relative @click="() => cart.remove(product.id)">
              Remove
            </DButton>
            <DButton v-else accent block relative @click="() => cart.add(product.id)">
              Add to cart
            </DButton>
          </div>
          <DButton
            v-if="favorite.has(product.id)" ghost square icon="i-mdi:heart text-red"
            absolute top-2 right-2 @click="() => favorite.remove(product.id)"
          />
          <DButton
            v-else ghost square icon="i-mdi:heart-outline" absolute top-2 right-2
            @click="() => favorite.add(product.id)"
          />
        </div>
      </div>
    </DCard>
  </template>
  
  