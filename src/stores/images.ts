import { defineStore, type Store } from 'pinia';
import type { Image } from '@/api/image-rest/type/index';
import { api } from '@/api/indext';

// Интерфейс, описывающий состояние хранилища
interface ImageStoreState {
  isLoaded: boolean;
  isError: boolean;
  isEmpty: boolean;
  perPage: number;
  page: number;
  favorite: OneImage[];
  imagesList: Image[];
  isSearch: boolean;
  totalNum: number;
  totalPageNum: number;
}

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

// Определите тип для вашего хранилища
export type ImageStore = Store<string, ImageStoreState>;

export const useImageStore = defineStore('images', {
  state: (): ImageStoreState => ({
    isLoaded: false,
    isError: false,
    isEmpty: false,
    perPage: 9,
    page: 1,
    favorite: [],
    imagesList: [],
    isSearch: false,
    totalNum: 1,
    totalPageNum: 1,
  }),

  actions: {
    async getRandomImage() {
      this.isLoaded = true;
      this.isError = false;
      this.isSearch = false;

      try {
        const randomPage = Math.floor(Math.random() * 10) + 1;

        const res = await api.images.list({
          page: randomPage,
          per_page: this.perPage,
        });

        this.imagesList = res;
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoaded = false;
      }
    },

    async searchByQuery(value: string) {
      try {
        this.isLoaded = true;
        this.isError = false;
        this.isEmpty = false;

        const { results, total, total_pages } = await api.images.searchImages({
          page: this.page,
          per_page: this.perPage,
          query: value,
        });

        if (results.length === 0) {
          this.isEmpty = true;
        }

        this.totalNum = total;
        this.totalPageNum = total_pages;
        this.imagesList = results;
        this.isSearch = true;
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoaded = false;
      }
    },

    putFavorite(value: OneImage) {
      this.favorite.push(value);
    },

    deleteFavorite(index: number) {
      this.favorite.splice(index, 1);
    },
  },
});
