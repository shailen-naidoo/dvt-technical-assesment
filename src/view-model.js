import { useProductsStore } from '@/stores/products'
import { BASE_QUANTITY } from './constants'

const AppViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    numberOfProductsSelected() {
      return this.products
        .filter((product) => product.quantity > BASE_QUANTITY)
        .length
    }
  }
}

export { AppViewModel }