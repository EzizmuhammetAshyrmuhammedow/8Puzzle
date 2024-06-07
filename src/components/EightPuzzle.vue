<template>
  <div class="flex flex-col items-center">
    <div
      class="grid grid-cols-3 grid-rows-3 size-auto gap-2 rounded-xl bg-green-900 p-1 pointer-events-none"
      id="imgGrid"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.source"
        :class="
          clsx(
            'rounded-lg',
            {
              'row-start-1': image.row === 1,
              'row-start-2': image.row === 2,
              'row-start-3': image.row === 3,
            },
            {
              'col-start-1': image.col === 1,
              'col-start-2': image.col === 2,
              'col-start-3': image.col === 3,
            }
          )
        "
        @click="MoveTile(image, index)"
      />
    </div>
    <select
      id="select"
      class="mt-5 py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
      @change="shuffleImages"
    >
      <option selected disabled>Choose shuffle amount</option>
      <option value="3">3</option>
      <option value="30">30</option>
    </select>
  </div>

  <div
    class="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10 hidden overlay"

  >
    <div
      class="bg-zinc-900 rounded-xl w-80 h-40 text-center z-20 flex flex-col justify-center items-center"
    >
      <h1 class="text-4xl text">You Won</h1>
      <h3 class="text-xl">Press f5 to play again</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import clsx from "clsx";

const Goal = ref([
  { source: "/src/assets/Image1/2.png", col: 2, row: 1 },
  { source: "/src/assets/Image1/3.png", col: 3, row: 1 },
  { source: "/src/assets/Image1/4.png", col: 1, row: 2 },
  { source: "/src/assets/Image1/5.png", col: 2, row: 2 },
  { source: "/src/assets/Image1/6.png", col: 3, row: 2 },
  { source: "/src/assets/Image1/7.png", col: 1, row: 3 },
  { source: "/src/assets/Image1/8.png", col: 2, row: 3 },
  { source: "/src/assets/Image1/9.png", col: 3, row: 3 },
]);
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

const emptyCell = { source: "", col: 1, row: 1 };

function MoveTile(image) {
  let clickedImage = { ...image };
  if (
    (clickedImage.row === emptyCell.row &&
      (clickedImage.col === emptyCell.col - 1 ||
        clickedImage.col === emptyCell.col + 1)) ||
    (clickedImage.col === emptyCell.col &&
      (clickedImage.row === emptyCell.row - 1 ||
        clickedImage.row === emptyCell.row + 1))
  ) {
    let temp = { ...emptyCell };

    image.col = temp.col;
    image.row = temp.row;

    emptyCell.col = clickedImage.col;
    emptyCell.row = clickedImage.row;
  }
  CheckWin();
}

function CheckWin() {
  if (JSON.stringify(images.value) === JSON.stringify(Goal.value)) {
    document.querySelector(".overlay").classList.toggle("hidden");
  }
}

function shuffleImages(event) {
  const shuffleCount = parseInt(event.target.value, 10);

  function performShuffle(count) {
  if (count > 0) {
    // Find movable tiles (tiles adjacent to the empty cell)
    const movableTiles = images.value.filter(
      (image) =>
        (image.row === emptyCell.row &&
          (image.col === emptyCell.col - 1 ||
            image.col === emptyCell.col + 1)) ||
        (image.col === emptyCell.col &&
          (image.row === emptyCell.row - 1 ||
            image.row === emptyCell.row + 1))
    );

    // Select a random tile to move
    const randomTile =
      movableTiles[Math.floor(Math.random() * movableTiles.length)];
    MoveTile(randomTile);

    // Check if the current arrangement is same as the goal arrangement
    if (JSON.stringify(images.value) === JSON.stringify(Goal.value)) {
      // If the current arrangement is the same as the goal, reshuffle
      performShuffle(shuffleCount);
    } else {
      // If not, perform the next shuffle after a delay
      setTimeout(() => performShuffle(count - 1), 300); // Adjust the delay (100ms) as needed
    }
  } else {
    // Check if the shuffled arrangement is the same as the goal arrangement
    if (JSON.stringify(images.value) === JSON.stringify(Goal.value)) {
      // If the shuffled arrangement is the same as the goal, reshuffle
      performShuffle(shuffleCount);
    } else {
      // If not, allow interaction and check if the player has won
      document.getElementById("imgGrid").classList.remove("pointer-events-none");
      CheckWin();
    }
  }
}


  performShuffle(shuffleCount);

  document.getElementById("select").classList.add("hidden");
  document.getElementById("imgGrid").classList.remove("pointer-events-none");
}

function closeModal() {
  document.querySelector(".overlay").classList.add("hidden");
}
</script>
