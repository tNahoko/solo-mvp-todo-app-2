<template>
  <div class="hello">
    <div>
    <p class="tasks">Completed Tasks: {{todos.filter(todo => {return todo.status === "done"}).length}}</p>
    <p class="tasks">Pending Tasks: {{todos.filter(todo => {return todo.status === "pending"}).length}}</p>
    <Todo v-on:complete-todo="completeTodo" v-for="(todo, name, index) in todos" v-bind:key="index" v-bind:todo.sync="todo"></todo>
  </div>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.tasks {
  text-align: center;
}
</style>