import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/the-home.vue';
import Favorite from '../views/the-favorite.vue';
import OneImage from '@/views/one-image.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
    },
    {
      path: '/one-image/:id',
      name: 'one-image',
      component: OneImage,
    },
  ],
});

export default router;
