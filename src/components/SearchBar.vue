<template>
  <div>
    <div class="search-holder">
      <input type="text" class="search-holder__input" v-model="inputText" @input="validateInput" placeholder="Type text only">
      <button @click="updateDiv" class="search-holder__button">{{ button }}</button>
    </div>
    <div>{{ displayedText }}</div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      button: 'SEARCH',
      inputText: '',
      displayedText: '',
    };
  },
  methods: {
    updateDiv() {
      this.displayedText = this.inputText.trim().toLowerCase();
    },
    validateInput() {
      this.inputText = this.inputText.replace(/[^a-zA-Z\s]/g, '');
    },
  },
};
</script>

  
<style scoped>
.search-holder {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.search-holder__input {
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

.search-holder__input:hover {
  border-color: #6c757d;
}

.search-holder__input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.search-holder__input:invalid {
  border-color: #dc3545;
}

.search-holder__button {
  background-color: #dc3545;
  color: beige;
  text-transform: uppercase;
  border: none;
  padding: 20px 40px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
  