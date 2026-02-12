<template>
  <h1>spend all of elon musk's money</h1>
  <h2>841,100,000,000 us dollaroos</h2>
  <div>
    <ShoppingProduct v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<script setup>
import ShoppingProduct from '@/components/ShoppingProduct.vue'
import { ref } from 'vue'
let money = ref(841100000000)
const products = [
  {
    name: 'end homelessness in the us',
    price: 30000000000,
    max: 1,
    image: '/homeless.png',
  },
  {
    name: 'cruise ship',
    price: 930000000,
    max: 50,
    image: '/cruise ship.avif',
  },
  {
    name: 'skyscraper',
    price: 850000000,
    max: 50,
    image: '/skyscraper.png',
  },
  {
    name: 'mona lisa',
    price: 780000000,
    max: 1,
    image: '/mona lisa.png',
  },
  {
    name: 'mansion',
    price: 45000000,
    max: 50,
    image: '/mansion.png',
  },
  {
    name: 'helicopter',
    price: 31000000,
    max: 100,
    image: '/helicopter.png',
  },
  {
    name: 'yacht',
    price: 7500000,
    max: 50,
    image: '/yacht.png',
  },
  {
    name: 'mcdonalds restaurant',
    price: 2500000,
    max: 100,
    image: '/mcdonalds.png',
  },
  {
    name: 'gold bar',
    price: 700000,
    max: 1000,
    image: '/gold.png',
  },
  {
    name: 'house',
    price: 500000,
    max: 100,
    image: '/house.webp',
  },
  {
    name: 'ferrari',
    price: 250000,
    max: 100,
    image: '/ferrari.png',
  },
  {
    name: 'tesla',
    price: 75000,
    max: 100,
    image: '/tesla.webp',
  },
  {
    name: 'rolex',
    price: 15000,
    max: 1000,
    image: '/rolex.png',
  },
  {
    name: 'jet ski',
    price: 12000,
    max: 100,
    image: '/jetski.avif',
  },
  {
    name: 'diamond ring',
    price: 10000,
    max: 1000,
    image: '/diamond_ring.png',
  },
  {
    name: 'luxury wine',
    price: 7000,
    max: 5000,
    image: '/wine.png',
  },
  {
    name: 'hot tub',
    price: 6000,
    max: 1000,
    image: '/hottub.webp',
  },
  {
    name: 'designer bag',
    price: 5500,
    max: 5000,
    image: '/birkin.webp',
  },
  {
    name: 'puppy',
    price: 1500,
    max: 100,
    image: '/puppy.png',
  },
  {
    name: 'kitten',
    price: 1500,
    max: 100,
    image: '/kitten.webp',
  },
  {
    name: 'phone',
    price: 1500,
    max: 100,
    image: '/phone.avif',
  },
  {
    name: 'bike',
    price: 800,
    max: 1000,
    image: '/bike.webp',
  },
  {
    name: 'gaming console',
    price: 500,
    max: 100,
    image: '/ps5.webp',
  },
  {
    name: 'airpods',
    price: 200,
    max: 1000,
    image: '/airpods.avif',
  },
  {
    name: 'air jordans',
    price: 200,
    max: 5000,
    image: '/jordans.avif',
  },
]
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
