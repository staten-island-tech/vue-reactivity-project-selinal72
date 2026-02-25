import { reactive } from 'vue'

export const store = reactive({
  money: 841100000000,
  buy(price, max, amount) {
    this.money -= price
  },
  sell(price, max, amount) {
    if (amount != 0) {
    }
    this.money += price
  },
})
