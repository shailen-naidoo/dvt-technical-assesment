<template>
  <nav class="bg-gray-800">
    <section class="container mx-auto px-4 py-2 flex justify-between items-center">
      <router-link to="/" class="font-bold text-white text-2xl">DVT Vue Storefront</router-link>
      <ul class="hidden md:flex space-x-4 text-white">
        <li><router-link to="/cart" class="hover:text-gray-400">View Cart ({{ numberOfProductsSelected }})</router-link></li>
      </ul>
    </section>
  </nav>
  <RouterView />
</template>

<script>
import { AppViewModel } from './view-model'

export default AppViewModel
</script>
