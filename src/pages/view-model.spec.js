import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Index from './Index.vue'

describe('Test Index.vue', () => {
  test('Check if mounts', () => {
    const wrapper = mount(Index)

    expect(wrapper.vm.hello).toBe('world')
  })
})