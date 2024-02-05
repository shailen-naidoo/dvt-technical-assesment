import { ProductService } from "@/services/ProductService"
import { useProductsStore } from '@/stores/products'

const IndexViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  methods: {
    setProductQuantity(productIndex, quantityValue) {
      this.products[productIndex].quantity = quantityValue
    }
  },
  mounted() {
    return ProductService.fetchListOfProducts()
      .then((products) => { products.forEach((product) => this.products.push(product)) })
      .catch((err) => window.alert(err))
  }
}

export { IndexViewModel }