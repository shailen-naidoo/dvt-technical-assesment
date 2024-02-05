<template>
  <main class="container mx-auto">
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <article v-for="(product, index) in products" :key="product" class="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
        <h3 class="text-lg font-medium mt-4">{{ product.title }}</h3>
        <h4 class="text-lg font-medium mt-4">{{ product.category }}</h4>
        <p class="text-gray-500 text-sm mb-2">{{ product.description }}</p>
        <span class="font-bold text-green-500">R{{ product.price }}</span>
        <select :value="product.quantity" class="ml-4" name="Product Quantity" @change="setProductQuantity(index, $event.target.value)">
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
import { IndexViewModel } from './view-model'

export default IndexViewModel
</script>