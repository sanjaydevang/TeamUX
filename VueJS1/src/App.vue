<template>
  <div class="container">
    <Header title="Vue App" action="Get started" color="lightblue" />
  </div>
  <div class="container">
    <Header title="Todo list" action="Add Task" />
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>




<style>
#app{    
  text-align: center;
    color: brown;
    margin: 60px;
    padding:20px
  }

.container {
    border: 1px solid steelblue;
    padding: 30px;
    max-width: 500px;
    margin: auto;
}

button {
    background-color: steelblue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
