<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <h4>{{ product.price }}</h4>
    <img :src="product.image" alt="" />
    <button @click="store.buy(product.price)">buy</button>
    <button @click="store.sell(product.price)">sell</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
import { store } from '@/store/store.js'
</script>

<style scoped>
.card {
  min-width: 250px;
  width: 22%;
  height: 30rem;
  margin: 3rem 0;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: white 0px 1px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s;
}

img {
  width: 300px;
  max-height: 300px;
}
</style>
