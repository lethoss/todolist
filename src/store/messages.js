export default {
  state: {
    message: ''
  },
  mutations: { // when this mutations are called we change the Vuex store
    message (state, index) {
      if (index === 'cancelEditing') {
        state.message = 'Do you really want to cancel editing and go to Home page? Unsaved data will be deleted.'
      } else if (index === 'deleteThisTodo') {
        state.message = 'Do you realy want to remove this todo and go to Home page?'
      } else {
        state.message = `Do you realy want to remove todo №${index + 1}?`
      }
    }
  },
  getters: {
    getMessage (state) { // and we need to return the value using a getter
      return state.message
    }
  }
}
