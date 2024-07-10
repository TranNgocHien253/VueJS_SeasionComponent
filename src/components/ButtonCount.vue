<template>
  <div>
    <button @click="callFunctionIncrease">
      <slot name="increase">Button content</slot>
    </button>
    <button @click="callFunctionIncreaseByTwoTimes">
      <slot name="increaseByTwoTimes">Button content</slot>
    </button>
    <button @click="callFunctionIncreaseBy">
      <slot name="increaseBy">Button content</slot>
    </button>
    <p>Locale: {{ locale }}</p>
    
    </div>
  
  <h1>Add/Remove <p>Tag</p></h1>
  <button @click="exists = !exists">{{ exists ? 'Remove' : 'Add' }} <p>Tag</p></button><br>
  <Transition>
    <p v-if="exists">Hello World!</p>
  </Transition>
</template>

<script setup>
import { inject, Transition, ref } from "vue";
const emit = defineEmits(["increase", "increase-by-two-times", "increase-by"]);

// Sử dụng yêu cầu tĩnh
// const imageProduct = ref(new URL('@/assets/image/product(1).jpg', import.meta.url).href);
const { locale } = inject("locale");

const exists = ref(false);
const callFunctionIncrease = () => {
  emit("increase");
};
const callFunctionIncreaseByTwoTimes = () => {
  emit("increaseByTwoTimes");
};
const callFunctionIncreaseBy = () => {
  emit("increaseBy", 10, 10);
};
</script>
