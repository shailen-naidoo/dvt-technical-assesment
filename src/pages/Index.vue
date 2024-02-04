<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product" class="card bg-white rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer">
        <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover" />
        <h3 class="text-lg font-medium mt-4">{{ product.title }}</h3>
        <h4 class="text-lg font-medium mt-4">{{ product.category }}</h4>
        <p class="text-gray-500 text-sm mb-2">{{ product.description }}</p>
        <span class="font-bold text-green-500">R{{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { IndexViewModel } from './view-model'

export default IndexViewModel
</script>