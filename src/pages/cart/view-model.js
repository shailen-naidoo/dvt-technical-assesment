import { useProductsStore } from '@/stores/products'

const CartViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    productsSelected() {
      return this.products.filter((product) => product.quantity > 0)
    },
    totalPriceOfCart() {
      return this.productsSelected
        .reduce((previousValue, { price, quantity }) => (price * quantity) + previousValue, 0)
    }
  },
  methods: {
    removeProductFromCart(product) {
      product.quantity = 0
    }
  }
}

export { CartViewModel }