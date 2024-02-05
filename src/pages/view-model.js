import { ProductService } from "@/services/ProductService"
import { useProductsStore } from '@/stores/products'

const IndexViewModel = {
  setup() {
    const { products } = useProductsStore()

    return { products }
  },
  mounted() {
    return ProductService.fetchListOfProducts()
      .then((products) => { products.forEach((product) => this.products.push(product)) })
      .catch((err) => window.alert(err))
  }
}

export { IndexViewModel }