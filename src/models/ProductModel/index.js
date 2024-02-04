class ProductModel {
  constructor(product) {
    this.title = product.title
    this.price = product.price
    this.category = product.category
    this.description = product.description
    this.image = product.image
  }
}

export { ProductModel }