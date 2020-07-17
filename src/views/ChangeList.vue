<template>
  <div>
    <h2>  Changing list page </h2>
    <div>
      <label for="title">Enter title</label> <br>
      <input id="title" type="text" v-model="todoList.title">
      <br>
      <div>Enter new todo-item</div>
      <div v-for="(todo, index) in todoList.todoItems"
      :key="index"
      >
      <input type="text" v-model="todo.item">
      <input type="checkbox" v-model="todo.checked">
      <button @click="showToast(index)">Remove todo-item</button>
    </div>
    <br>
    <Toast v-if="removeId" v-on:closeToast="closeToast"/>
    <button @click="addNewTodoItem">Add new todo-item</button>
    <br>
    <button @click="saveThisTodo">Save todo</button>
    <button @click="actionRemove">Remove atcions</button>
    <br>
    <button @click="showToast('cancelEditing')">Cancel editing</button>
    <button @click="showToast('deleteThisTodo')">Remove todo</button>
  </div>
</div>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  name: 'changeList',
  components: {
    Toast
  },
  data: () => ({
    removeId: 0
  }),
  computed: {
    todoList() {
       return this.$store.state.todoList[this.$route.query.query]
     }
  },
  methods: {
    addNewTodoItem () {
      this.todoList.todoItems.push({
        item: '',
        checked: false
      })
    },
    showToast (index) {
      this.removeId = index + ''
      this.$store.commit('message', index)
    },
    closeToast (isRemove) {
      if (isRemove === 'yes') {
        if (this.removeId === 'cancelEditing') {
          this.$router.push('/')
        } else if (this.removeId === 'deleteThisTodo') {
          this.$store.commit('removeTodo', this.$route.query.query)
          this.$router.push('/')
        } else {
          this.todoList.todoItems.splice(Number(this.removeId), 1)
        }
      }
      this.removeId = 0
    },
    saveThisTodo () {
      const newItem = this.todoList
      const query = this.$route.query.query
      this.$store.commit('saveTodo', {newItem, query})
    },
    actionRemove () {

    }
  }
}
</script>
