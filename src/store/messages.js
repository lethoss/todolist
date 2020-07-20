export default {
  state: {
    message: ''
  },
  mutations: {
    message (state, index) {
      if (index === 'cancelEditing') {
        state.message = 'Do you really want to cancel editing and go to Home page?'
      } else if (index === 'deleteThisTodo') {
        state.message = 'Do you reaaly want to remove this todo and go to Home page?'
      } else {
        state.message = `Do you reaaly want to remove todo №${index + 1}?`
      }
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
}
