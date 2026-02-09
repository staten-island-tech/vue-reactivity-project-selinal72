<template>
  <div>
    <h3>{{ product.name }}</h3>
    <h4>{{ product.price }}</h4>
    <button>buy</button>
    <button>sell</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
