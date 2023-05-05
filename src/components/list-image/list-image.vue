<template>
  <main class="list-image">
    <div class="container">
      <ul
        class="list-image__wrapper grid-wrapper"
        v-if="!props.error && !props.loading"
      >
        <li
          class="list-image__item grid-wrapper__item"
          v-for="item of props.list"
          :key="item.id"
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
