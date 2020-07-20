export default {
  state: {
    todoList: []
  },
  mutations: { // simple mutations to change the state of Vuex store
    addNewTodo (state) {
      state.todoList.push({
        title: '',
        todoItems: [
          {
            item: '',
            checked: false
          }
        ]
      })
    },
    saveTodo (state, newTodo) {
      state.todoList.splice(newTodo.query, 1, newTodo.newItem)
    },
    removeTodo (state, index) {
      state.todoList.splice(index, 1)
    },
    addNewTodoItem (state, index) {
      state.todoList[index].todoItems.push({
        item: '',
        checked: false
      })
    },
    removeTodoItem (state, indexes) {
      state.todoList[indexes.query].todoItems.splice(indexes.removeId, 1)
    }
  },
  getters: {
    getTodoList (state) {
      return state.todoList
    }
  }
}
