<template>
  <div class="pagination">
    <button
      class="pagination__button"
      :disabled="props.currentPage === firstPageNumber"
      @click="emit('previous')"
    >
      prev
    </button>
    <div>...</div>
    <button
      v-for="item in listPage"
      :key="item"
      @click="emit('goToPage', item)"
    >
      {{ item }}
    </button>
    <div>...</div>
    <button @click="emit('goToPage', props.totalPage)">
      {{ props.totalPage }}
    </button>
    <button
      class="pagination__button"
      :disabled="props.isLastPage"
      @click="emit('next')"
    >
      next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  currentPage: number;
  total: number;
  totalPage: number;
  isLastPage: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'next'): void;
  (e: 'previous'): void;
  (e: 'goToPage', page: number): void;
}>();

const maxPaginationNumber = 5;
const firstPageNumber = 1;

const listPage = computed(() => {
  return props.totalPage > maxPaginationNumber
    ? maxPaginationNumber
    : props.totalPage;
});
</script>

<style scoped lang="scss"></style>
