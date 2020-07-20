<template>
  <div class="toast">
    <div class="buttons">
      <div>{{message}}</div>
      <button @click="isRemove('yes')">Yes</button>
      <button @click="isRemove('no')">No</button>
    </div>
  </div>
</template>


<script>
export  default {
  methods: {
    isRemove (isRemove) {
      this.$emit('closeToast', isRemove) //return the 'yes' or 'no' message in parent component
    }
  },
  computed: {
    message () {
      return this.$store.getters.getMessage //get the correct info message from Vuex store for different calls
    }
  }
}
</script>

<style scoped>
.toast {
  border: 2px solid blue;
  border-radius: 20px;
  margin-top: -70px;
  margin-left: -150px;
  width: 300px;
  height: 100px;
  background-color: grey;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.buttons {
  text-align: center;
}
button {
  margin: 3px;
}
</style>
