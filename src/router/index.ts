import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/the-home.vue';
import Favorite from '../views/the-favorite.vue';
import OneImage from '@/views/one-image.vue';
import { Routes } from './route';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home,
  },
  {
    path: '/favorite',
    name: Routes.FAVORITE,
    component: Favorite,
  },
  {
    path: '/one-image/:id',
    name: Routes.ONEIMAGE,
    component: OneImage,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
