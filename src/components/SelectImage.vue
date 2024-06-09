<script setup>
import TheImage from "./TheImage.vue";
import { storeToRefs } from "pinia";
import { useImageStore } from "/src/stores/useImageStore";
import { watch } from "vue";

const imageStore = useImageStore();
const { selectedImage } = storeToRefs(imageStore);

const selectImage = (imageSrc) => {
  imageStore.selectImage(imageSrc);
};

watch(selectedImage, (newValue) => {
  console.log(`Selected image: ${newValue}`);
});
</script>

<template>
  <h2 class="text-3xl">Please select an image</h2>
  <div class="flex">
    <TheImage
      src="/Giraffe.jpg"
      :class="[
        'w-44 h-44 m-5 rounded-lg hover:opacity-30 transition ease-in-out duration-500',
        {
          'ring-8 ring-green-600': selectedImage === 'Giraffe',
        },
      ]"
      @click="selectImage('Giraffe')"
    />
    <TheImage
      src="/Mountain.jpg"
      :class="[
        'w-44 h-44 m-5 rounded-lg hover:opacity-30 transition ease-in-out duration-500',
        {
          'ring-8 ring-green-600': selectedImage === 'Mountain',
        },
      ]"
      @click="selectImage('Mountain')"
    />
  </div>
  <button
    class="bg-green-600 w-32 h-16 rounded-md text-2xl text-white hover:scale-105 hover:bg-white hover:text-green-600 ring ring-green-600 ring-width-2 transition-all duration-200 ease-in-out"
  >
    <router-link :to="`/puzzle${selectedImage}`">Continue</router-link>
  </button>
</template>
