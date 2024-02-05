import { BASE_QUANTITY } from '@/constants'
import { useProductsStore } from '@/stores/products'
import { BASE_TOTAL_PRICE } from './constants'

const CartViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    productsSelected() {
      return this.products.filter((product) => product.quantity > BASE_QUANTITY)
    },
    totalPriceOfCart() {
      return this.productsSelected
        .reduce((previousValue, { price, quantity }) => (price * quantity) + previousValue, BASE_TOTAL_PRICE)
    }
  },
  methods: {
    removeProductFromCart(product) {
      product.quantity = 0
    }
  }
}

export { CartViewModel }