import { reactive } from 'vue'

export const store = reactive({
  money: 841100000000,
  buy(price, max, amount) {
    if (amount < max) {
      this.money -= price
      amount++
      console.log(amount)
    } else {
      console.log('maxed out')
    }
  },
  sell(price, amount) {
    if (amount > 0) {
      this.money += price
      amount--
      console.log(amount)
    } else {
      console.log('nothing to sell')
    }
  },
})
