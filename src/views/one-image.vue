<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '@/api/indext';

import { useImageStore, type ImageItem } from '@/stores/images';

interface Props {
  id: string;
}

const imageItem = ref<ImageItem>({
  id: '',
  username: '',
  img: '',
  socials: '',
  download: '',
});

const props = defineProps<Props>();
const store = useImageStore();

onMounted(async () => {
  const res = await api.images.oneImage(props.id);

  imageItem.value = {
    download: res.links.download,
    img: res.urls.regular,
    socials: res.user.twitter_username ?? res.user.instagram_username,
    username: res.user.name,
    id: res.id,
  };
});
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
            <button
              class="one-image__btn"
              @click="
                () => {
                  store.putFavorite(imageItem);
                }
              "
            >
              Избранное
            </button>
            <button class="one-image__download">Загрузить</button>
          </div>
        </div>

        <div class="one-image__content">
          <img :src="imageItem.img" alt="image" />
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
    justify-content: center;

    max-height: 800px;
    img {
      object-fit: contain;
    }
  }
}
</style>
