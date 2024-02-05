function assignProducts(vm, products) {
  products.forEach((product) => vm.products.push(product))
}

export { assignProducts }