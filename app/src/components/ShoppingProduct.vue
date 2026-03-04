<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <h4>{{ product.price }}</h4>
    <img :src="product.image" alt="" />
    <button class="buy-btn" @click="store.buy(product)">buy</button>
    <h4>{{ product.amount }}</h4>
    <h5 v-if="product.maxStatus">maxed out!</h5>
    <button class="sell-btn" @click="store.sell(product)">sell</button>
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
.product-card {
  min-width: 250px;
  width: 22%;
  height: 35rem;
  margin: 3rem 0;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: white 0px 1px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s;
  background-color: white;
  color: #292999;
}

img {
  width: 250px;
  max-height: 250px;
}

.buy-btn {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  color: rgb(98, 184, 126);
  font-size: 14px;
  height: 38px;
  padding: 8px 24px;
  border-radius: 50px;
  background-image: linear-gradient(180deg, #fff, #f5f5fa);
  box-shadow:
    0 4px 11px 0 rgb(37 44 97 / 15%),
    0 1px 3px 0 rgb(93 100 148 / 20%);
  transition: all 0.2s ease-out;
  :hover {
    box-shadow:
      0 8px 22px 0 rgb(37 44 97 / 15%),
      0 4px 6px 0 rgb(93 100 148 / 20%);
  }
}

.sell-btn {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  color: rgb(187, 51, 51);
  font-size: 14px;
  height: 38px;
  padding: 8px 24px;
  border-radius: 50px;
  background-image: linear-gradient(180deg, #fff, #f5f5fa);
  box-shadow:
    0 4px 11px 0 rgb(37 44 97 / 15%),
    0 1px 3px 0 rgb(93 100 148 / 20%);
  transition: all 0.2s ease-out;
  :hover {
    box-shadow:
      0 8px 22px 0 rgb(37 44 97 / 15%),
      0 4px 6px 0 rgb(93 100 148 / 20%);
  }
}
</style>
