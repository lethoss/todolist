import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state: {
    message: '',
    todoList: [
      {
        title: 'Todo 1',
        todoItems: [
          {
            item: 'do 1',
            checked: true
          },
          {
            item: 'do 2',
            checked: false
          }
        ]
      },
      {
        title: 'Todo 2',
        todoItems: [
          {
            item: 'do 11',
            checked: true
          },
          {
            item: 'do 22',
            checked: false
          }
        ]
      }
    ]
  },
  plugins: [createPersistedState()],
  mutations: {
    saveTodo (state, newTodo) {
      state.todoList[newTodo.query] = newTodo.newItem
    },
    removeTodo (state, index) {
      state.todoList.splice(index, 1)
    },
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
  },
  actions: {
  },
  modules: {

  }
})
