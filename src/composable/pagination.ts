import type { ImageStore } from '@/stores/images';
import { ref, computed, watch } from 'vue';

type Pagination = {
  currentPage: number;
  total: number;
  totalPage: number;
};

export const usePagination = (
  defaultOptions: Pagination,
  store: ImageStore
) => {
  const currentPage = ref(defaultOptions.currentPage);
  const total = ref(defaultOptions.total);
  const totalPage = ref(defaultOptions.totalPage);

  const next = () => {
    currentPage.value += 1;
    // Обновляем значение в хранилище
    store.page = currentPage.value;
  };

  const previous = () => {
    currentPage.value -= 1;
    // Обновляем значение в хранилище
    store.page = currentPage.value;
  };

  const isLastPage = computed(() => currentPage.value === totalPage.value);

  // Используем watch для отслеживания изменений в хранилище
  watch(
    () => store.totalNum,
    (newTotal) => {
      total.value = newTotal;
    }
  );

  watch(
    () => store.totalPageNum,
    (newTotalPage) => {
      totalPage.value = newTotalPage;
    }
  );

  return { currentPage, total, totalPage, next, previous, isLastPage };
};
