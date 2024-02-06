import { BASE_QUANTITY } from '@/models/ProductModel/constants'
import { useProductsStore } from '@/stores/products'
import { calculateTotalPriceOfCart, getProductsSelected } from './private'

const CartViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  computed: {
    productsSelected() {
      return getProductsSelected(this)
    },
    totalPriceOfCart() {
      return calculateTotalPriceOfCart(this)
    }
  },
  methods: {
    removeProductFromCart(product) {
      product.quantity = BASE_QUANTITY
    }
  }
}

export { CartViewModel }