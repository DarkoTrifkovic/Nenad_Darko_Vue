<template>
    <div>
        <h2>{{ number }}</h2>
        <button class="increment" @click="increaseNumber">Increment</button>
        <button class="decrement" @click="decreaseNumber">Decrement</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        increaseNumber() {
            this.number++;
        },
        decreaseNumber() {
            this.number--;
        },
    },
};
</script>
  
<style scoped>
button {
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px 5px;
    cursor: pointer;
}

.increment {
    background-color: #018080;
}

.decrement {
    background-color: #f65261;
}
</style>