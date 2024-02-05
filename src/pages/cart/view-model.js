import { useProductsStore } from '@/stores/products'

const CartViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    productsSelected() {
      return this.products.filter((product) => product.quantity > 0)
    }
  }
}

export { CartViewModel }