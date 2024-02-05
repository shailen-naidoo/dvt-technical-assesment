class ProductModel {
  constructor(product) {
    this.title = product.title
    this.price = product.price
    this.category = product.category
    this.description = product.description
    this.image = product.image

    // values that are defined by us
    this.quantity = 0
  }
}

export { ProductModel }