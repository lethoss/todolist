<template>
  <div>
    <h1>Test SPA app for todos.</h1>
    <div v-if="!todoList.length">You have no todos! Please, enter some...</div>
    <div v-else>
      <div class="todo-container"
      v-for="(todo, index) in todoList"
      :key="index"
      >
      <div class="todo-item">
        <h3 class="todo-title">Todo №{{index + 1}}: {{todo.title}}</h3>
        <div v-if="todo.todoItems[0]">{{todo.todoItems[0].item}} <input type="checkbox" v-model="todo.todoItems[0].checked" disabled></div>
        <div v-if="todo.todoItems[1]">{{todo.todoItems[1].item}} <input type="checkbox" v-model="todo.todoItems[1].checked" disabled></div>
        <div v-if="todo.todoItems[2]">{{todo.todoItems[2].item}} <input type="checkbox" v-model="todo.todoItems[2].checked" disabled></div>
        <div v-if="todo.todoItems[3]">...</div>
      </div>
      <button @click="editTodo(index)">Edit todo</button>
      <button @click="removeTodoMessage(index)">Remove todo</button>
    </div>
    <Toast v-if="removeId" v-on:closeToast="closeToast"/>
  </div>
  <button @click="addNewTodo">Add new todo</button>
</div>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  name: 'Home',
  components: {
    Toast
  },
  data: () => ({
    removeId: 0
  }),
  computed: {
    todoList () {
      return this.$store.getters.getTodoList
    }
  },
  methods: {
    addNewTodo () {
      this.$store.commit('addNewTodo')
      this.$router.push(`/change-list?query=${this.todoList.length - 1}`)
    },
    editTodo (index) {
      this.$router.push(`/change-list?query=${index}`)
    },
    removeTodoMessage (index) {
      this.removeId = index + ''
      this.$store.commit('message', index)
    },
    closeToast (isRemove) {
      if (isRemove === 'yes') {
        this.$store.commit('removeTodo', Number(this.removeId))
      }
      this.removeId = 0
    }
  }
}
</script>

<style>

.todo-item {
  border: solid 2px black;
  display: inline-block;
}
.todo-title {
  border-bottom: solid 1px black;
}
</style>
