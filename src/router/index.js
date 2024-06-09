import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EightPuzzleGiraffe from "@/components/EightPuzzleGiraffe.vue";
import EightPuzzleMountain from '@/components/EightPuzzleMountain.vue';

// Optional: Remove this line if not using a subdirectory on GitHub Pages
// const baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
  // Change to hash mode for GitHub Pages
  history: createWebHistory(), // Remove baseUrl if using hash mode
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/puzzleGiraffe",
      name: "puzzleGiraffe",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EightPuzzleGiraffe
    },
    {
      path: "/puzzleMountain",
      name: "puzzleMountain",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EightPuzzleMountain,
    },
  ],
});

export default router;
