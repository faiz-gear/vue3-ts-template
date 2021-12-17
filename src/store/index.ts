import { defineStore } from 'pinia'

export const useStore = defineStore('system', {
  state: () => ({
    name: '张三'
  })
})
