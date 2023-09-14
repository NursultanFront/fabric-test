import type { ImageStore } from '@/stores/images';
import { ref, computed, watchEffect } from 'vue';

type Pagination = {
  currentPage: number;
  total: number;
  totalPage: number;
};

type Store = ImageStore;

export const usePagination = (defaultOptions: Pagination, store: Store) => {
  const currentPage = ref(defaultOptions.currentPage);
  const total = ref(defaultOptions.total);
  const totalPage = ref(defaultOptions.totalPage);

  const next = () => {
    currentPage.value += 1;
  };

  const previous = () => {
    currentPage.value -= 1;
  };

  const isLastPage = computed(() => currentPage.value === totalPage.value);

  watchEffect(() => {
    total.value = store.totalNum;
    totalPage.value = store.totalPageNum;
  });

  return { currentPage, total, totalPage, next, previous, isLastPage };
};
