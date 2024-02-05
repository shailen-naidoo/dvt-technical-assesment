import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import Index from './Index.vue'

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('Test Index.vue', () => {
  describe('User should be able to view their cart items, see the total price and remove items if they no longer want to purchase them', () => {
    describe('Happy cases', () => {
      test('If user navigates to this page to see their cart items they should be shown their items that they selected only', () => {
        // 1. SETUP
        const wrapper = mount(Index)

        // 2. ACTION - Emulating user has selected products in the product listing page
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 1 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 3 })

        // 3. ASSERT
        expect(wrapper.vm.productsSelected).toHaveLength(2)
      })

      test('If user no longer wants a product they can remove the item by clicking the remove button', () => {
        // 1. SETUP
        const wrapper = mount(Index)

        // 2.1 ACTION - Emulating user has selected products in the product listing page
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 1 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 3 })

        // 2.2 ACTION
        wrapper.vm.removeProductFromCart(wrapper.vm.productsSelected[0])

        // 3. ASSERT
        expect(wrapper.vm.productsSelected).toHaveLength(1)
      })

      test('Display the total price of the items to the user', () => {
        // 1. SETUP
        const wrapper = mount(Index)

        // 2.1 ACTION - Emulating user has selected products in the product listing page
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 1 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 0 })
        wrapper.vm.products.push({ title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com', quantity: 3 })

        // 3. ASSERT
        expect(wrapper.vm.totalPriceOfCart).toBe(4000)
      })
    })
  })
})