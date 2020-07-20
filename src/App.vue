<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
}
</script>

<style>
.title {
  display: inline-block;
  position: relative;
  margin-left: 7px;
  margin-top: 3px;
}
.title:hover::after {
  content: attr(data-title);
  position: absolute;
  left: 10%; top: 40%;
  z-index: 1;
  background: rgba(255,255,230,0.9);
  font-family: Arial, sans-serif;
  font-size: 11px;
  padding: 2px 4px;
  border: 1px solid #333;
}
@media (max-width: 500px) {
  h1 {
    margin: 5px !important;
    text-align: center;
  }
  span{
    margin: 0;
    text-align: center;
  }
  input[type=text] {
    max-width: 56vw;
  }
  input[type=checkbox] {
    display: inline-block;
  }
  .todoItem {
    margin-top: 1rem;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .buttonSpan {
    display: block;
    margin-top: -3px;
  }
  .toast {
    box-sizing: border-box;
    width: 90vw !important;
    margin-left: -45vw !important;
  }
  .todo-item {
    margin: 0 !important;
    width: 93vw;
  }
  .todo-item div {
    max-width: 83%;
  }

}
</style>
