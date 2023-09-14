<template>
  <div class="pagination">
    <button
      class="pagination__button"
      :disabled="props.currentPage === firstPageNumber"
    >
      prev
    </button>
    <div>...</div>
    <button v-for="item in listPage" :key="item">
      {{ item }}
    </button>
    <div>...</div>
    <button class="pagination__button" :disabled="props.isLastPage">go</button>
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

const maxPaginationNumber = 5;
const firstPageNumber = 1;

const listPage = computed(() => {
  return props.totalPage > maxPaginationNumber
    ? maxPaginationNumber
    : props.totalPage;
});
</script>

<style scoped lang="scss"></style>
