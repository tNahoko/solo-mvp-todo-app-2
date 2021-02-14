<template>
<div class="todo-container">
  <div class="content">
      <div class='field'>
        <label> {{todo.desc}}</label>
      </div>
      <div class='field'>
        <label>Due on: {{todo.date}}</label>
      </div>
      <div class='field'>
        <label>Status: {{todo.status}}</label>
      <div class='buttons'>
        <button class='button' v-on:click="markDone">
          Done ✅
        </button>
        <button class='button' v-on:click="deleteItem">
          Delete ❌
        </button>
      </div>
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
      markDone () {
        this.$emit('mark-done', this.todo.id);
      },
      deleteItem() {
        this.$emit('delete-item', this.todo.id);
      }
    },
  };
</script>

<style scoped>
.content {
  padding: 10px;
  margin: 20px;
  background:#ffffa5;
  font-size:15px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.button {
  margin: 5px;
}
</style>