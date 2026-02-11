<template>
  <h1>spend all of elon musk's money</h1>
  <h2>841,100,000,000 us dollaroos</h2>
  <div>
    <ShoppingProduct v-for="product in products" :key="product.name" :product="product" />
  </div>
  <img src="" alt="" />
</template>

<script setup>
import ShoppingProduct from '@/components/ShoppingProduct.vue'
import { ref } from 'vue'
let money = 841100000000
const products = ref([
  {
    name: 'end homelessness in the us',
    price: 30000000000,
    max: 1,
  },
  {
    name: 'cruise ship',
    price: 930000000,
    max: 50,
  },
  {
    name: 'skyscraper',
    price: 850000000,
    max: 50,
  },
  {
    name: 'mona lisa',
    price: 780000000,
    max: 1,
  },
  {
    name: 'mansion',
    price: 45000000,
    max: 50,
  },
  {
    name: 'helicopter',
    price: 31000000,
    max: 100,
  },
  {
    name: 'yacht',
    price: 7500000,
    max: 50,
  },
  {
    name: 'mcdonalds restaurant',
    price: 2500000,
    max: 100,
  },
  {
    name: 'gold bar',
    price: 700000,
    max: 1000,
  },
  {
    name: 'house',
    price: 500000,
    max: 100,
  },
  {
    name: 'ferrari',
    price: 250000,
    max: 100,
  },
  {
    name: 'tesla',
    price: 75000,
    max: 100,
  },
  {
    name: 'rolex',
    price: 15000,
    max: 1000,
  },
  {
    name: 'jet ski',
    price: 12000,
    max: 100,
  },
  {
    name: 'diamond ring',
    price: 10000,
    max: 1000,
  },
  {
    name: 'luxury wine',
    price: 7000,
    max: 5000,
  },
  {
    name: 'hot tub',
    price: 6000,
    max: 1000,
  },
  {
    name: 'designer bag',
    price: 5500,
    max: 5000,
  },
  {
    name: 'puppy',
    price: 1500,
    max: 100,
  },
  {
    name: 'kitten',
    price: 1500,
    max: 100,
  },
  {
    name: 'phone',
    price: 1500,
    max: 100,
  },
  {
    name: 'bike',
    price: 800,
    max: 1000,
  },
  {
    name: 'gaming console',
    price: 500,
    max: 100,
  },
  {
    name: 'airpods',
    price: 200,
    max: 1000,
  },
  {
    name: 'air jordans',
    price: 200,
    max: 5000,
  },
])
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
