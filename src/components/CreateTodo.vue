<template>
  <div>
    <button class='newButton' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'>Click Here to Create Item</i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Task Description: </label>
            <input v-model="descText" type='text'>
          </div>
          <div class='field'>
            <label>Due on: </label>
            <input v-model="dateText" type='text' placeholder="YYYY-MM-DD">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descText: '',
      dateText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.descText.length > 0) {
        const newItem = {
          desc: this.descText,
          date: this.dateText
        };
        this.$emit('create-todo', newItem);
        this.descText = '';
        this.dateText = '';
        this.isCreating = false;
      }
    },
  },
};
</script>

<style scoped>
.newButton {
  background-color: Green;
  color: white;
  transition-duration: 0.4s;
}

.newButton:hover {
  background-color: lightgreen;
  color: black;
}
</style>