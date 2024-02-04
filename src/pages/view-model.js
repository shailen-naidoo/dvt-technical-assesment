import { ProductService } from "@/services/ProductService"

const IndexViewModel = {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    return ProductService.fetchListOfProducts()
      .then((products) => this.products = products)
      .catch((err) => window.alert(err))
  }
}

export { IndexViewModel }