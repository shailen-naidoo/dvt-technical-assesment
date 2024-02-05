import { mount, flushPromises } from "@vue/test-utils";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import Index from './Index.vue'
import axios from "axios";

vi.mock('axios')

beforeEach(() => {
  vi.resetAllMocks()

  setActivePinia(createPinia())
})

describe('Test Index.vue', () => {
  describe('Test the listing of the products and ensure that they get displayed to the user', () => {
    describe('Edge cases', () => {
      test('If the fetching of the list of products fails at the network level an error message should be displayed to the user', () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed!')
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

        // 2. ACTION
        mount(Index)

        return flushPromises().then(() => {
          // 3. ASSERT
          expect(axios.get).toBeCalledTimes(1)
          expect(axios.get).toBeCalledWith('https://fakestoreapi.com/products')
          expect(alertSpy).toBeCalledTimes(1)
          expect(alertSpy).toBeCalledWith('Network request failed!')
        })
      })
    })

    describe('Happy cases', () => {

      test('When the user selects an item to be added to the cart by selecting a quantity via the dropdown, it should update the quantity property on the item accordingly', () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({
          data: [
            { title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
            { title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
          ]
        })

        const wrapper = mount(Index)

        const PRODUCT_INDEX = 1
        const QUANTITY_VALUE = 3

        return flushPromises().then(() => {
          // 2. ACTION
          wrapper.vm.setProductQuantity(PRODUCT_INDEX, QUANTITY_VALUE)

          // 3. ASSERT
          expect(wrapper.vm.products[PRODUCT_INDEX].quantity).toBe(3)
        })
      })

      test('When the user visits the webapp it should fetch a list of products and display it to the user', () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({
          data: [
            { title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
            { title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
          ]
        })

        // 2. ACTION
        const wrapper = mount(Index)

        return flushPromises().then(() => {
          // 3. ASSERT
          expect(axios.get).toBeCalledTimes(1)
          expect(axios.get).toBeCalledWith('https://fakestoreapi.com/products')
          expect(wrapper.vm.products).toEqual([
            { title: 'A', price: 1000, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
            { title: 'B', price: 500, category: 'Electronics', description: 'Hello World', image: 'https://image.com' },
          ])
        })
      })
    })
  })
})