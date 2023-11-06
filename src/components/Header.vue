<template>
    <div class="header">
      <h1>{{ logo }}</h1>
      <button>{{ button }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        logo: 'netflixroulette',
        button: '+ ADD MOVIE'
      };
    },
    methods: {
      // Definišite metode koje će komponenta koristiti
      // Na primer:
      // nekaFunkcija() {
      //   // Logika funkcije
      // }
    },
    computed: {
      // Definišite computed properties ako su potrebni
      // Na primer:
      // reversedMessage() {
      //   return this.message.split('').reverse().join('');
      // }
    },
    // Dodajte druge opcije komponente po potrebi
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    color: #f65261;
    background-color: rgba(246, 82, 97, 0.1);
  }

  h1 {
    font-size: 40px;
  }

  button {
    padding: 20px 40px;
    color: #f65261;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    height: 50%;
    margin: auto 0;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  