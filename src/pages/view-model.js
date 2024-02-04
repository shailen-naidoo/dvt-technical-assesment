import { ProductService } from "@/services/ProductService"

const IndexViewModel = {
  mounted() {
    return ProductService.fetchListOfProducts()
      .catch((err) => window.alert(err))
  }
}

export { IndexViewModel }