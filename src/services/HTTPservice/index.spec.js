import { describe, expect, it, vi } from "vitest";
import axios from 'axios'
import { HTTPService } from './index'

vi.mock('axios')

describe('Test HTTPservice', () => {
  describe('.get method', () => {
    describe('Edge cases', () => {
      it('If a network request fails it should raise an error to the function that called it', () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce('Network request failed')

        //2. ACTION + ASSERT
        expect(HTTPService.get('https://fakeapi.com')).rejects.toBe('Network request failed')
      })
    })
  })
})