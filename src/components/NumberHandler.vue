<template>
    <div class="number-handler">
      <h2>{{ number }}</h2>
        <button class="number-handler__increment number-handler__button" @click="increaseNumber">Increment</button>
        <button class="number-handler__decrement number-handler__button" @click="decreaseNumber">Decrement</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'NumberHandler',
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        increaseNumber(): void {
            this.number++;
        },
        decreaseNumber(): void {
            this.number--;
        },
    },
  });
  </script>
  
  <style scoped>
     .number-handler__button {
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin: 10px 5px;
        cursor: pointer;
    }

    .number-handler__increment {
        background-color: #018080;
    }

    .number-handler__decrement {
        background-color: #f65261;
    }
  </style>
  