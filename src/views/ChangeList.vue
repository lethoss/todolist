<template>
  <div>
    <h2>Changing list page</h2>
    <div class="container">
      <label for="title">Title: </label> <br>
      <input
        id="title"
        type="text"
        @click="showTitleButton=true"
        :class="{'isEdit': showTitleButton, 'isView': !showTitleButton}"
        :size="todoListItem.title.length"
        v-model="todoListItem.title"
      > <!-- input for editing title of current todo item with dynamic length and classes-->
      <button v-if="showTitleButton" class="saveButton" @click="showTitleButton=false"></button>
      <br>
      <div v-if="!todoListItem.todoItems.length">No added todo in this list. Please, add some...</div>
      <div v-else> <!--The todos will be shown only if they are exists -->
        <div>Todo-items list:</div>
        <div
          v-for="(todo, index) in todoListItem.todoItems"
          :key="index"
          class="todoItem"
        >
        <span>№{{index + 1}} - </span>
        <input
          type="text"
          @click="showControlButtons.splice(index, 1, true)"
          v-model="todo.item" :size="todo.item.length"
          :class="{'isEdit': showControlButtons[index], 'isView': !showTitleButton, 'lineThrough': todo.checked}"
        > <!--Dynamic creating the todos from todo Item -->
        <input type="checkbox" v-if="todo.item" v-model="todo.checked"> <!--checkbox for marking todos -->
        <span class="buttonSpan">
          <button v-if="showControlButtons[index]" class="saveButton" @click="saveTodoItem(index)"></button>
          <button v-if="showControlButtons[index]" class="removeButton" @click="showToast(index)"></button> <!--buttons will be shown only in editing mode -->
        </span>
      </div>
    </div>
    <Toast v-if="removeId" v-on:closeToast="closeToast"/> <!--popup window with number of deleting todo-item is shown only after clicking on button-->
    <button class="addNewTodoItem title" data-title="Add new todo item" @click="addNewTodoItem"></button>
    <button class="undoButton title" data-title="1 step back" @click="stepBack"></button>
    <button class="redoButton title" data-title="1 step forward" @click="stepForvard"></button>
    <button class="saveTodo title" data-title="Save this todo" @click="saveThisTodo('closeAll')"></button>
    <button class="cancelEditing title" data-title="Cancel editing" @click="showToast('cancelEditing')"></button>
    <button class="removeTodo title" data-title="Delete this todo" @click="showToast('deleteThisTodo')"></button><!--control buttons-->
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
    removeId: 0, //the number for todo or todo item deleting or the flag for edit canceling
    history: [], //an array in which the history of changes in the current todo item will be recorded
    count: 0, //counter of the current step in history
    showTitleButton: false, //flag of showing title button
    showControlButtons: [] //the flag of showing input save buttons
  }),
  computed: {
    todoListItem() {
      return this.$store.getters.getTodoList[this.$route.query.query] //getting current todo item from Vuex todolis
    }
  },
  methods: {
    addNewTodoItem () {
      this.$store.commit('addNewTodoItem', this.$route.query.query) //add new todo in curren todo item
    },
    saveTodoItem (index) {
      this.showControlButtons.splice(index, 1, false)
      this.saveThisTodo() //save the current changes and hide button near the input
    },
    showToast (index) {
      this.removeId = index + ''//index of 1st todo-item is 0(number), so to open the popup we must transform number in string (coz the check is v-if="removeId" line 38)
      this.$store.commit('message', index)//get the info message
    },
    closeToast (isRemove) {
      if (isRemove === 'yes') {
        if (this.removeId === 'cancelEditing') { //if user confirm edit canceling
          const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1])) //we write in todo List the previous history step so that the changes will not saved
          const query = this.$route.query.query //because we transmit the Object as a parametr we cant use keyword this in brackets, so we must create a new constant
          this.$store.commit('saveTodo', {newItem, query})
          if ((Number(this.$route.query.query) === this.$store.getters.getTodoList.length - 1) && !this.history[1] && !this.todoListItem.title && !this.todoListItem.todoItems[0].item) {
            this.$store.commit('removeTodo', this.$route.query.query) //if it is new, dont changed and dont saved todo item we dont save it
          }
          this.$router.push('/') // and we go to home page
        } else if (this.removeId === 'deleteThisTodo') { // if it was the confirm of deliting current todo item
          this.$store.commit('removeTodo', this.$route.query.query) // we delete it from todo list in Vuex store
          this.$router.push('/') // and go to home page
        } else { // if it was the confirm of todo deliting
          const query = this.$route.query.query
          const removeId = Number(this.removeId)
          this.$store.commit('removeTodoItem', {removeId, query})//choosen todo will be deleted from Vuex store
        }
      }
      this.removeId = 0 //the pupup window will hides
    },
    saveThisTodo (closeAll) {
      const newItem = this.todoListItem
      const query = this.$route.query.query
      this.history[this.count] = JSON.parse(JSON.stringify(this.todoListItem)) //creating the breakpoint for history array
      this.count ++
      this.$store.commit('saveTodo', {newItem, query})
      if (closeAll) { //hide all save buttons if the save todo item button was clicked
        this.showTitleButton = false
        this.showControlButtons.fill(false, 0, this.todoListItem.length)
      }
    },
    stepBack () {
      if (this.count > 1) { //if some earlier history points exists
        this.count--
        const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1]))
        const query = this.$route.query.query
        this.$store.commit('saveTodo', {newItem, query}) //we go back for one step in changes history
      }
    },
    stepForvard () {
      if (this.count < this.history.length) { //if some later history points exists
        this.count++
        const newItem = JSON.parse(JSON.stringify(this.history[this.count - 1]))
        const query = this.$route.query.query
        this.$store.commit('saveTodo', {newItem, query}) //we go forward for one step in changes history
      }
    }
  },
  mounted () {
    this.showControlButtons.length = this.todoListItem.todoItems.length //when the app mounted in DOM we create an array to manage the "save" buttons
    this.showControlButtons.fill(false, 0, this.todoListItem.length)
    this.history[this.count] = JSON.parse(JSON.stringify(this.todoListItem)) //and do first breakpoint in history array
    this.count++
  }
}
</script>

<style scoped>
input {
  border: none;
  outline: none;
  margin: 5px;
  max-width: 58vw;
  text-align: center;
}
.container, h2 {
  margin: 15px;
  text-align: center;
}
.isEdit {
  border: solid 2px grey;
  border-radius: 3px;
}
.isView {
  border-bottom: solid 1px black;
}
.saveButton, .removeButton {
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  padding: 0;
  position: relative;
  top: 3px;
  cursor: pointer;
}
.saveButton::before, .removeButton::before {
  display: block;
  content: '';
  background-position: -2px -2px;
  background-color: transparent;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  margin: 0 auto;
}
.saveButton::before {
  background-image: url('https://img.icons8.com/plasticine/20/000000/save.png');
}
.removeButton::before {
  background-image: url('https://img.icons8.com/doodle/20/000000/delete-sign.png')
}
.addNewTodoItem, .removeTodo, .cancelEditing, .saveTodo, .undoButton, .redoButton {
  background-color: transparent;
  border: none;
  width: 50px;
  height: 50px;
  outline: none;
  cursor: pointer;
  position: relative;
}
.addNewTodoItem {
  background-image: url('https://img.icons8.com/cute-clipart/50/000000/add-property.png');
}
.removeTodo {
  background-image: url('https://img.icons8.com/cotton/50/000000/file-delete.png');
}
.cancelEditing {
  background-image: url('https://img.icons8.com/cotton/50/000000/delete-sign--v2.png');
}
.saveTodo {
  background-image: url('https://img.icons8.com/cute-clipart/50/000000/save-all.png');
}
.undoButton {
  background-image: url('https://img.icons8.com/cute-clipart/50/000000/undo.png');
}
.redoButton {
  background-image: url('https://img.icons8.com/cute-clipart/50/000000/redo.png');
}
.todoItem {
  height: 2rem;
}
</style>
