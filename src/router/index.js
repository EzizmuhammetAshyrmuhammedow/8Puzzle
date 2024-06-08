import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PuzzleView from '../views/PuzzleView.vue' // Assuming PuzzleView exists

// Optional: Remove this line if not using a subdirectory on GitHub Pages
// const baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
  // Change to hash mode for GitHub Pages
  history: createWebHistory(), // Remove baseUrl if using hash mode
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/puzzle',
      name: 'puzzle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PuzzleView
    }
  ],
})

export default router
