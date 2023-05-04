<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();
</script>

<template>
  <main class="one-image">
    <div class="container">
      <div class="one-image__wrapper">
        <div class="one-image__header">
          <div class="one-image__box">
            <h2 class="title"></h2>
          </div>

          <div class="one-image__action">
            <button class="one-image__btn">Избранное</button>
            <button class="one-image__download">Загрузить</button>
          </div>
        </div>

        <div class="one-image__content">
          <img src="@/assets/photo.png" alt="image" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.one-image {
  background-image: url('@/assets/favorite-back.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  &__wrapper {
    padding: 41px 0 109px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 0 0 39px;
  }

  &__content {
    display: flex;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
