<template>
  <h1>spend all of elon musk's money</h1>
  <h2>841,100,000,000 us dollaroos</h2>
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
    price: 70000,
    max: 1000,
  },
])
</script>

<style scoped></style>
