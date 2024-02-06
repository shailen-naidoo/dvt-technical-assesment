import { BASE_QUANTITY } from "@/models/ProductModel/constants"
import { BASE_TOTAL_PRICE } from "./constants"

function getProductsSelected(vm) {
  return vm.products.filter((product) => product.quantity > BASE_QUANTITY)
}

function calculateTotalPriceOfCart(vm) {
  return vm.productsSelected
    .reduce((previousValue, { price, quantity }) => (price * quantity) + previousValue, BASE_TOTAL_PRICE)
}

export {
  getProductsSelected,
  calculateTotalPriceOfCart,
}