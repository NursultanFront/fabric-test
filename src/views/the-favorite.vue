<template>
  <main class="favorite">
    <div class="container">
      <div class="favorite__wrapper">
        <h2 class="favorite__title">Избранное</h2>
        <p v-if="favorite.length == 0" class="favorite__nothing">
          Здесь пока ничего нет
        </p>
        <ul v-else class="favorite__list grid-wrapper">
          <li
            class="favorite__item grid-wrapper__item"
            v-for="item of favorite"
            :key="item.id"
          >
            <img :src="item.img" :alt="item.username" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/images';

const { favorite } = useImageStore();
</script>

<style scoped lang="scss">
.favorite {
  &__wrapper {
    padding: 94px 107px;
  }

  &__title {
    margin: 0 0 101px;
    font-weight: 700;
    font-size: 72px;
    line-height: 84px;
    text-align: center;

    color: var(--vt-c-black);
  }

  &__nothing {
    text-align: center;
  }

  &__list {
  }

  &__item {
  }
}
</style>
