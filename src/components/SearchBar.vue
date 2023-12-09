<template>
    <div class="search-bar">
      <div class="search-bar__search-holder">
        <input
          type="text"
          class="search-bar__search-holder__input"
          v-model="inputText"
          @input="validateInput"
          placeholder="Type text only"
        />
        <button @click="updateDiv" class="search-bar__search-holder__button">
          {{ button }}
        </button>
      </div>
      <div class="search-bar__display-search" v-if="displayedText">
        {{ displayedText }}
      </div>
    </div>
    <NumberHandler />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import NumberHandler from "./NumberHandler.vue";

  
  export default defineComponent({
    name: 'SearchBar',
    data() {
    return {
      button: "SEARCH",
      inputText: "",
      displayedText: "",
    };
  },
  components: { NumberHandler },
  methods: {
    updateDiv(): void {
      this.displayedText = this.inputText.trim().toLowerCase();
    },
    validateInput(): void {
      this.inputText = this.inputText.replace(/[^a-zA-Z\s]/g, "");
    },
  },
  });
  </script>
  
  <style scoped>
  .search-bar__search-holder {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.search-bar__search-holder__input {
  background-color: rgba(39, 40, 38, 0.8);
  color: white;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-right: 20px;
  width: 40%;
  height: 60px;
}

.search-bar__search-holder__input:hover {
  border-color: #6c757d;
}

.search-bar__search-holder__input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.search-bar__search-holder__input:invalid {
  border-color: #dc3545;
}

.search-bar__search-holder__button {
  background-color: #dc3545;
  color: beige;
  text-transform: uppercase;
  border: none;
  padding: 20px 40px;
  cursor: pointer;
  border-radius: 5px;
}

.search-bar__display-search {
  background-color: teal;
  color: white;
  padding: 10%;
}
  </style>
  