<template>
  <main class="container mx-auto">
    <p class="text-gray-500 text-sm mb-2 ml-4 mt-4">Total price of cart: R{{ totalPriceOfCart }}</p>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <article v-for="product in productsSelected" :key="product" class="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
        <h3 class="text-lg font-medium mt-4">{{ product.title }}</h3>
        <h4 class="text-lg font-medium mt-4">{{ product.category }}</h4>
        <p class="text-gray-500 text-sm mb-2">{{ product.description }}</p>
        <span class="font-bold text-green-500">R{{ product.price }}</span>
        <button type="button" class="inline-flex items-center px-2 py-2 ml-5 bg-red-500 text-white rounded-lg" @click="removeProductFromCart(product)">
          Remove
        </button>
        <select :value="product.quantity" disabled>
          <option :value="0">0</option>
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
        </select>
      </article>
    </section>
  </main>
</template>

<script>
import { CartViewModel } from './view-model.js'

export default CartViewModel
</script>