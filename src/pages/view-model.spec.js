import { mount, flushPromises } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import Index from './Index.vue'
import axios from "axios";

vi.mock('axios')

describe('Test Index.vue', () => {
  describe('Test the listing of the products and ensure that they get displayed to the user', () => {
    describe('Edge cases', () => {
      test('If the fetching of the list of products fails at the network level an error message should be displayed to the user', () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed!')
        const alertSpy = vi.spyOn(window, 'alert')

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
  })
})