import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Image } from '@/api/image-rest/type/index';
import { api } from '@/api/indext';

export const useImageStore = defineStore('images', () => {
  const favorite = ref([]);
  const imagesList = ref<Image[]>([]);

  async function getRandomImage() {
    const randomPage = Math.random();
    const randomCount = Math.random();

    const res = await api.images.list();

    imagesList.value = res;
  }

  async function searchImage(value: string) {
    const { results } = await api.images.searchImages({ query: value });
    imagesList.value = results;
  }

  return { favorite, getRandomImage, imagesList, searchImage };
});
