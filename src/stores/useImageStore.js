import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    selectedImage: null, // Will store the full path of the selected image
  }),
  actions: {
    selectImage(imageSrc) {
      this.selectedImage = this.selectedImage === imageSrc ? null : imageSrc;
    },
  },
});
