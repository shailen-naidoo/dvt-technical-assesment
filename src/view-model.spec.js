import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import App from './App.vue'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('Test App.vue', () => {
  describe('View Cart navigation link', () => {
    describe('Happy cases', () => {
      test('If the user selects some items in the listing product page, the "View Cart" link should be updated with the number of items in the cart', () => {
        // 1. SETUP
        const wrapper = shallowMount(App)

        // 2. ACTION - Emulating that a user has selected a product in the product listing page
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 3 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 1 })

        // 3. ASSERT
        expect(wrapper.vm.numberOfProductsSelected).toBe(2)
      })
    })
  })
})