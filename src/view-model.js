import { useProductsStore } from '@/stores/products'

const AppViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    numberOfProductsSelected() {
      return this.products
        .filter((product) => product.quantity > 0)
        .length
    }
  }
}

export { AppViewModel }