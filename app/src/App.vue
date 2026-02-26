<template>
  <h1>spend all of elon musk's money</h1>
  <h2>{{ store.money }} dollaroos</h2>
  <div class="grid grid-cols-4 gap 4">
    <ShoppingProduct v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<script setup>
import ShoppingProduct from '@/components/ShoppingProduct.vue'
import { ref } from 'vue'
import { store } from '@/store/store.js'

const products = [
  {
    name: 'end homelessness in the us',
    price: 30000000000,
    max: 1,
    image: './homeless.png',
    amount: 0,
  },
  {
    name: 'cruise ship',
    price: 930000000,
    max: 50,
    image: './cruise ship.avif',
    amount: 0,
  },
  {
    name: 'skyscraper',
    price: 850000000,
    max: 50,
    image: '/skyscraper.png',
    amount: 0,
  },
  {
    name: 'mona lisa',
    price: 780000000,
    max: 1,
    image: '/mona lisa.png',
    amount: 0,
  },
  {
    name: 'mansion',
    price: 45000000,
    max: 50,
    image: '/mansion.png',
    amount: 0,
  },
  {
    name: 'helicopter',
    price: 31000000,
    max: 100,
    image: '/helicopter.webp',
    amount: 0,
  },
  {
    name: 'yacht',
    price: 7500000,
    max: 50,
    image: '/yacht.png',
    amount: 0,
  },
  {
    name: 'mcdonalds restaurant',
    price: 2500000,
    max: 100,
    image: '/mcdonalds.png',
    amount: 0,
  },
  {
    name: 'gold bar',
    price: 700000,
    max: 1000,
    image: '/gold.png',
    amount: 0,
  },
  {
    name: 'house',
    price: 500000,
    max: 100,
    image: '/house.webp',
    amount: 0,
  },
  {
    name: 'ferrari',
    price: 250000,
    max: 100,
    image: '/ferrari.png',
    amount: 0,
  },
  {
    name: 'tesla',
    price: 75000,
    max: 100,
    image: '/tesla.webp',
    amount: 0,
  },
  {
    name: 'rolex',
    price: 15000,
    max: 1000,
    image: '/rolex.webp',
    amount: 0,
  },
  {
    name: 'jet ski',
    price: 12000,
    max: 100,
    image: '/jetski.avif',
    amount: 0,
  },
  {
    name: 'diamond ring',
    price: 10000,
    max: 1000,
    image: '/diamond_ring.png',
    amount: 0,
  },
  {
    name: 'luxury wine',
    price: 7000,
    max: 5000,
    image: '/wine.png',
    amount: 0,
  },
  {
    name: 'hot tub',
    price: 6000,
    max: 1000,
    image: '/hottub.webp',
    amount: 0,
  },
  {
    name: 'designer bag',
    price: 5500,
    max: 5000,
    image: '/birkin.webp',
    amount: 0,
  },
  {
    name: 'puppy',
    price: 1500,
    max: 100,
    image: '/puppy.png',
    amount: 0,
  },
  {
    name: 'kitten',
    price: 1500,
    max: 100,
    image: '/kitten.webp',
    amount: 0,
  },
  {
    name: 'phone',
    price: 1500,
    max: 100,
    image: '/phone.avif',
    amount: 0,
  },
  {
    name: 'bike',
    price: 800,
    max: 1000,
    image: '/bike.webp',
    amount: 0,
  },
  {
    name: 'gaming console',
    price: 500,
    max: 100,
    image: '/ps5.webp',
    amount: 0,
  },
  {
    name: 'airpods',
    price: 200,
    max: 1000,
    image: '/airpods.avif',
    amount: 0,
  },
  {
    name: 'air jordans',
    price: 200,
    max: 5000,
    image: '/jordans.avif',
    amount: 0,
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
</style>
