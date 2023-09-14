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
  const isLoaded = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const isEmpty = ref<boolean>(false);

  const perPage = 9;
  const page = 1;
  const favorite = ref<OneImage[]>([]);
  const imagesList = ref<Image[]>([]);

  const getRandomImage = async () => {
    isLoaded.value = true;
    isError.value = false;
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;

      const res = await api.images.list({
        page: randomPage,
        per_page: perPage,
      });

      imagesList.value = res;
    } catch (error) {
      isError.value = true;
    } finally {
      isLoaded.value = false;
    }
  };

  const searchByQuery = async (value: string) => {
    isLoaded.value = true;
    isError.value = false;
    isEmpty.value = false;
    try {
      const { results } = await api.images.searchImages({
        page: page,
        per_page: perPage,
        query: value,
      });

      if (results.length === 0) {
        isEmpty.value = true;
      }

      imagesList.value = results;
    } catch (error) {
      isError.value = true;
    } finally {
      isLoaded.value = false;
    }
  };

  const putFavorite = (value: OneImage) => {
    favorite.value.push(value);
  };

  const deleteFavorite = (value: OneImage, index: number) => {
    favorite.value.splice(index, 1);
  };

  return {
    favorite,
    getRandomImage,
    imagesList,
    searchByQuery,
    putFavorite,
    deleteFavorite,
    isLoaded,
    isError,
    isEmpty,
  };
});
