<template>
  <main class="list-image">
    <div class="container">
      <ul
        v-if="!props.error && !props.loading && !props.emptyList"
        class="list-image__wrapper grid-wrapper"
      >
        <li
          v-for="item of props.list"
          :key="item.id"
          class="list-image__item grid-wrapper__item"
        >
          <RouterLink :to="{ name: Routes.ONEIMAGE, params: { id: item.id } }">
            <img
              :src="item.urls.small"
              :alt="item.description ?? item.alt_description"
            />
          </RouterLink>
        </li>
      </ul>
      <p v-else-if="props.error" class="list-image__wrapper">Error</p>
      <p v-else-if="props.loading" class="list-image__wrapper">Loading</p>
      <p v-else-if="props.emptyList" class="list-image__wrapper">
        Ничего не найдено
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Image } from '@/api/image-rest/type';
import { Routes } from '@/router/route';
import { RouterLink } from 'vue-router';

interface Props {
  list: Image[];
  loading: boolean;
  error: boolean;
  emptyList: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.list-image {
  &__wrapper {
    padding: 114px 0;
  }

  p {
    text-align: center;
  }
}
</style>
