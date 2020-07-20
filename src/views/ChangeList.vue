<template>
  <div>
    <h2>  Changing list page </h2>
    <div>
      <label for="title">Enter title</label> <br>
      <input id="title" type="text" v-model="todoListItem.title">
      <br>
      <div>Enter new todo-item</div>
      <div v-for="(todo, index) in todoListItem.todoItems"
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
    <button @click="stepBack">Remove atcions</button>
    <button @click="stepForvard">Forvard atcions</button>
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
    removeId: 0,
    history: [],
    count: 0
  }),
  computed: {
    todoListItem() {
      return this.$store.getters.getTodoList[this.$route.query.query]
    }
  },
  methods: {
    addNewTodoItem () {
      this.$store.commit('addNewTodoItem', this.$route.query.query)
    },
    showToast (index) {
      this.removeId = index + ''
      this.$store.commit('message', index)
    },
    closeToast (isRemove) {
      if (isRemove === 'yes') {
        if (this.removeId === 'cancelEditing') {
          const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1]))
          const query = this.$route.query.query
          this.$store.commit('saveTodo', {newItem, query})
          this.$router.push('/')
        } else if (this.removeId === 'deleteThisTodo') {
          this.$store.commit('removeTodo', this.$route.query.query)
          this.$router.push('/')
        } else {
          const query = this.$route.query.query
          const removeId = Number(this.removeId)
          this.$store.commit('removeTodoItem', {removeId, query})
        }
      }
      this.removeId = 0
    },
    saveThisTodo () {
      const newItem = this.todoListItem
      const query = this.$route.query.query
      this.history[this.count] = JSON.parse(JSON.stringify(this.todoListItem))
      this.count ++
      this.$store.commit('saveTodo', {newItem, query})
    },
    stepBack () {
      if (this.count > 1) {
        this.count--
        const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1]))
        const query = this.$route.query.query
        this.$store.commit('saveTodo', {newItem, query})
      }
    },
    stepForvard () {
      if (this.count < this.history.length) {
        this.count++
        const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1]))
        const query = this.$route.query.query
        this.$store.commit('saveTodo', {newItem, query})
      }
    }
  },
  mounted () {
    this.history[this.count] = JSON.parse(JSON.stringify(this.todoListItem))
    this.count++
  }
}
</script>
