<script setup>
import { useCounterStore } from "./stores/counter";
import { storeToRefs } from "pinia";

const { count, doubleCount } = storeToRefs(useCounterStore());
const { increment, decrement } = useCounterStore(); 
</script>

<template>
  <main>
    <p>Count: {{ count }}</p>
    <p>Count x 2: {{ doubleCount }}</p>
    <button class="increase" @click="increment()">Increase +</button>
    <button class="decrease" @click="decrement()">Decrease -</button>
  </main>
</template>

<style scoped>
p {
  margin-bottom: 20px;
  font-size: 20px;
}

button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 5px;
  color: white;
}

button.increase {
  background-color: green;
}

button.decrease {
  background-color: red;
}
</style>