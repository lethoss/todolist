<template>
  <div>
    <h1>Test SPA app for todos.</h1>
    <div v-if="!todoList.length">You have no todos! Please, enter some...</div>
    <div v-else> <!--content is shown only when at least 1 todo is added-->
      <div class="todo-container"
      v-for="(todo, index) in todoList"
      :key="index"
      > <!--dynamic create a new todo items from todoList-->
      <div class="todo-item">
        <h3 class="todo-title">Todo №{{index + 1}}: {{todo.title}}</h3>
        <div v-if="todo.todoItems[0]">{{todo.todoItems[0].item}} <input type="checkbox" v-model="todo.todoItems[0].checked" disabled></div>
        <div v-if="todo.todoItems[1]">{{todo.todoItems[1].item}} <input type="checkbox" v-model="todo.todoItems[1].checked" disabled></div>
        <div v-if="todo.todoItems[2]">{{todo.todoItems[2].item}} <input type="checkbox" v-model="todo.todoItems[2].checked" disabled></div>
        <div v-if="todo.todoItems[3]">...</div> <!--if there are 4 or more todo-item we show only 3 and the ...-->
      </div>
      <span class="buttonSpan">
        <button class="editTodo title" data-title="Edit this todo" @click="editTodo(index)"></button> <!--data-title for tooltips-->
        <button class="removeTodo title" data-title="Delete this todo" @click="removeTodoMessage(index)"></button>
      </span>
    </div>
    <Toast v-if="removeId" v-on:closeToast="closeToast"/> <!--popup window with number of deleting todo-item is shown only after clicking on button-->
  </div>
  <button class="addTodo title" data-title="Add new todo" @click="addNewTodo"></button>
</div>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  name: 'Home',
  components: {
    Toast //component with popup window
  },
  data: () => ({
    removeId: 0 // this is the number for todo-item deleting
  }),
  computed: {
    todoList () {
      return this.$store.getters.getTodoList //getting todoList from Vuex store with gerrer
    }
  },
  methods: {
    addNewTodo () {
      this.$store.commit('addNewTodo')                                   // create new todo-item in Vuex store
      this.$router.push(`/change-list?query=${this.todoList.length - 1}`)//and transmit with query-parametr the number of this element in todolist
    },
    editTodo (index) {
      this.$router.push(`/change-list?query=${index}`) //go to the changing page and transmit with query-parametr the number of this element in todolist
    },
    removeTodoMessage (index) {
      this.removeId = index + '' //index of 1st todo-item is 0(number), so to open the popup we must transform number in string (coz the check is v-if="removeId" line 22)
      this.$store.commit('message', index)//get the info message from Vuex store
    },
    closeToast (isRemove) {
      if (isRemove === 'yes') { //if the user click the confirm button in popup
        this.$store.commit('removeTodo', Number(this.removeId)) //we delete current todo-item from store
      }
      this.removeId = 0 //and close the popup
    }
  }
}
</script>

<style>
h1 {
  margin-left: 100px;
}

.todo-item {
  border: solid 2px black;
  display: inline-block;
  margin: 10px 10px 10px 50px;
  border-radius: 13px;
}
.todo-item div {
  margin: 5px 5px 5px 15px;
}
.todo-title {
  border-bottom: solid 1px black;
  margin: 5px;
}
.addTodo, .removeTodo, .editTodo {
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  outline: none;
  cursor: pointer;
  position: relative;
}
.removeTodo {
  background-image: url('https://img.icons8.com/cotton/50/000000/file-delete.png');
}
.editTodo {
  background-image: url('https://img.icons8.com/cotton/50/000000/edit--v1.png');
}
.addTodo {
  width: 75px;
  height: 75px;
  background-image: url('https://img.icons8.com/dusk/75/000000/add-reminder.png');
  position: fixed;
  right: 5%;
  bottom: 5%;
}
</style>
