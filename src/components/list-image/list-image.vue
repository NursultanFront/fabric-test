<template>
  <main class="list-image">
    <div class="container">
      <ul class="list-image__wrapper">
        <li class="list-image__item" v-for="item of props.list" :key="item.id">
          <RouterLink :to="{ name: Routes.ONEIMAGE, params: { id: item.id } }">
            <img
              :src="item.urls.small"
              :alt="item.description ?? item.alt_description"
            />
          </RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Image } from '@/api/image-rest/type';
import { Routes } from '@/router/route';
import { RouterLink } from 'vue-router';

interface Props {
  list: Image[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.list-image {
  &__wrapper {
    padding: 114px 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  &__item {
    grid-column: span 4 / span 4;
    border-radius: 8px;
    height: 453px;

    img {
      border-radius: 8px;
    }
  }
}
</style>
