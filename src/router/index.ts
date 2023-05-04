import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/the-home.vue';
import Favorite from '../views/the-favorite.vue';
import OneImage from '@/views/one-image.vue';

const routes: RouteRecordRaw[] = [
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
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
