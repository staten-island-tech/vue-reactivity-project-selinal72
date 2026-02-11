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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid black;
}
</style>
