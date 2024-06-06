<script setup>
import { ref } from "vue";

const images = ref([
  { source: "/src/assets/Image1/2.png", col: 2, row: 1 },
  { source: "/src/assets/Image1/3.png", col: 3, row: 1 },
  { source: "/src/assets/Image1/4.png", col: 1, row: 2 },
  { source: "/src/assets/Image1/5.png", col: 2, row: 2 },
  { source: "/src/assets/Image1/6.png", col: 3, row: 2 },
  { source: "/src/assets/Image1/7.png", col: 1, row: 3 },
  { source: "/src/assets/Image1/8.png", col: 2, row: 3 },
  { source: "/src/assets/Image1/9.png", col: 3, row: 3 },
]);

const emptyCell = ref({ col: 1, row: 1 });

function MoveTile(image) {
  let temp = { ...image };

  image.row = emptyCell.value.row;
  image.col = emptyCell.value.col;

  emptyCell.value = temp; // Update emptyCell using v-model
}
</script>

<template>
  <div
    class="grid grid-cols-3 grid-rows-3 size-auto gap-2 rounded-xl bg-green-900 p-1"
  >
    <img
      v-for="image in images"
      :key="image.source"
      :src="image.source"
      :class="`size-44 rounded-lg col-start-${image.col} row-start-${image.row}`"
      @click="MoveTile(image)"
    />
  </div>
</template>
