import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Image } from '@/api/image-rest/type/index';
import { api } from '@/api/indext';

export interface OneImage {
  id: string;
  username: string;
  img: string;
  socials: string;
  download: string;
  userThumbnail: string;
  portfolioLink: string;
  isFavorite?: boolean;
}

export const useImageStore = defineStore('images', () => {
  const perPage = 9;
  const page = 1;
  const favorite = ref<OneImage[]>([]);
  const imagesList = ref<Image[]>([]);

  async function getRandomImage() {
    const randomPage = Math.random();

    const res = await api.images.list({ per_page: perPage });

    imagesList.value = res;
  }

  async function searchByQuery(value: string) {
    const { results } = await api.images.searchImages({
      page: page,
      per_page: perPage,
      query: value,
    });
    imagesList.value = results;
  }

  function putFavorite(value: OneImage) {
    const index = favorite.value.findIndex((item) => item.id === value.id);
    if (index === -1) {
      favorite.value.push(value);
    } else {
      favorite.value.splice(index, 1);
    }
  }

  return { favorite, getRandomImage, imagesList, searchByQuery, putFavorite };
});
