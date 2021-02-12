<template>
<div class="todo">
  <div class='ui centered card'>
    <div class='header'>
        {{ todo.title }}
    </div>
    <div class='meta'>
        {{ todo.project }}
    </div>
  </div>
  <div class="content">
        <div class='field'>
          <label>Description: </label>
          <input type='text' v-model="todo.desc" >
        </div>
        <div class='field'>
          <label>Due on: </label>
          <input type='text' v-model="todo.date" >
        </div>
        <div class='field'>
          <label>Status: </label>
          <input type='text' v-model="todo.status" >
        </div>
    </div>
    </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
    },
  };
</script>

<style scoped>
.content {
  padding: 10px;
}
</style>