<template>
  <div id="app">
  <h1 id="header">
    Todo-ista
  </h1>
    <CreateTodo v-on:create-todo="createTodo" />
    <TodoList v-bind:todos="todos" v-on:mark-done="markDone" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import CreateTodo from './components/CreateTodo';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    createTodo: async function (newItem) {
      console.log(newItem)
      const response = await axios.post('https://todo-st.herokuapp.com/api', newItem);
      console.log(response)
      let data = response.data;
      for (let i = 0; i < data.length; i++) {
        data[i].date = data[i].date.slice(0, 10);
      }
      this.todos = data;
    },
    markDone: async function (id)  {
      // make a patch request to update status
      const response = await axios.patch(`https://todo-st.herokuapp.com/api/done/${id}`);
      let data = response.data;
      for (let i = 0; i < data.length; i++) {
        data[i].date = data[i].date.slice(0, 10);
      }
      this.todos = data;
    }
  },
  async created() {
    try {
      const response = await axios.get('https://todo-st.herokuapp.com/api');
      let data = response.data;
      for (let i = 0; i < data.length; i++) {
        data[i].date = data[i].date.slice(0, 10);
      }
      this.todos = data;
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>