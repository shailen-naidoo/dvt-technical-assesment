<template>
  <nav class="bg-gray-800">
    <section class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a href="/" class="font-bold text-white text-2xl">DVT Vue Storefront</a>
      <ul class="hidden md:flex space-x-4 text-white">
        <li><a href="#" class="hover:text-gray-400">View Cart</a></li>
      </ul>
    </section>
  </nav>
  <RouterView />
</template>
