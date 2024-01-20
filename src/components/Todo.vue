<template>
  <div>
      <h1>Meine To-Do-Liste</h1>
      <ul>
          <li v-bind:key="item.id" v-for="item in todoEntries">
              <ToDoItem v-bind:todoItem="item" />
          </li>   
      </ul>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";

export default {
  name: 'ToDos',
  components: {
      ToDoItem
  },
  props: [
      "todoEntries"
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
