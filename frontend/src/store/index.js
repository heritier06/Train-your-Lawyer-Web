import { reactive } from 'vue'

const store = ({
  state: reactive({
    count: 0
  }),
  getters: {
    getCount() {
      return store.state.count
    }
  },
  mutations: {
    incrementCount() {
      store.state.count++
    }
  },
  actions: {
    initializeCount() {
      store.state.count = 0
    }
  }
})

export default store