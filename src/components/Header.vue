<template>
  <div class="header">
    <h1 class="header__logo">{{ logo }}</h1>
    <button class="header__button">{{ button }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface IData {
  logo: string;
  button: string;
}

export default Vue.extend({
  name: "TS-Header",
  data(): IData {
    return {
      logo: "netflixroulette",
      button: "+ ADD MOVIE",
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  color: #f65261;
  background-color: rgba(246, 82, 97, 0.1);
}

.header__logo {
  font-size: 40px;
}

.header__button {
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
