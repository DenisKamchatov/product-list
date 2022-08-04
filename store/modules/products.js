export default {
  state: {
    productsTest: {
      test: 'test'
    }
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    allProducts (state) {
      return state.productsTest
    }
  }
}
