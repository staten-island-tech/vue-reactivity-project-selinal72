import { reactive } from 'vue'

export const store = reactive({
  money: 841100000000,
  buy(product) {
    if (product.amount < product.max && this.money >= product.price) {
      this.money -= product.price
      product.amount++
      console.log(product.amount)
    } else if (product.amount == product.max) {
      product.maxStatus = true
    }
  },
  sell(product) {
    if (product.amount > 0) {
      this.money += product.price
      product.amount--
      if (product.amount == product.max - 1) {
        product.maxStatus = false
      }
    }
  },
})
