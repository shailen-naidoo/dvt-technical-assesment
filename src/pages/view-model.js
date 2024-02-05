import { ProductService } from "@/services/ProductService"
import { useProductsStore } from '@/stores/products'
import { assignProducts } from "./private"

const IndexViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  methods: {
    /**
     * @param {number} productIndex
     * @param {string} quantityValue - Value provided by a select tag which publishes a string value but we need a number
     */
    setProductQuantity(productIndex, quantityValue) {
      this.products[productIndex].quantity = parseInt(quantityValue)
    }
  },
  mounted() {
    return ProductService.fetchListOfProducts()
      .then((products) => assignProducts(this, products))
      .catch((err) => window.alert(err))
  }
}

export { IndexViewModel }