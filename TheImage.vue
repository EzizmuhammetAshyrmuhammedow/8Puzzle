<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps<{
  src: {
    type: string;
    required: true;
  };
  isSelected: {
    type: Boolean;
    default: false;
  };
}>();

const isClicked = ref(false);

const handleClick = () => {
  isClicked.value = !isClicked.value;
};
</script>

<template>
  <img
    :src="src"
    class="w-44 h-44 m-5 rounded-lg hover:opacity-30 focus:ring focus:ring-green-600 focus:ring-width-2 transition ease-in-out duration-500"
    @click="handleClick"
    :class="{ 'ring-8 ring-green-600': isClicked }"
  />
</template>
