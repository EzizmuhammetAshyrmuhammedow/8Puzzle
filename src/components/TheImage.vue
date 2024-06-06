<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  class:{
    type: String,
  }
});
</script>

<template>
  <img
    :src="src"
    :class="class"
  />
</template>
