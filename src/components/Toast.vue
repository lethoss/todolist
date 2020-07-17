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
      this.$emit('closeToast', isRemove)
    }
  },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style scoped>
.toast {
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
  align-items: center
}
.buttons {
  text-align: center;
}
button {
  margin: 3px;
}
</style>
