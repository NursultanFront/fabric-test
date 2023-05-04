<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { api } from '@/api/indext';

import { useImageStore, type OneImage } from '@/stores/images';
import FavoriteBlackIcon from '@/components/icons/FavoriteBlackIcon.vue';
import FavoriteYellowIcon from '@/components/icons/FavoriteYellowIcon.vue';
import { RouterLink } from 'vue-router';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const store = useImageStore();

const imageItem = ref<OneImage>({
  id: '',
  username: '',
  img: '',
  socials: '',
  download: '',
  userThumbnail: '',
  portfolioLink: '',
  isFavorite: false,
});

onMounted(async () => {
  const res = await api.images.oneImage(props.id);

  imageItem.value = {
    download: res.links.download,
    img: res.urls.regular,
    socials: res.user.twitter_username ?? res.user.instagram_username,
    username: res.user.name,
    id: res.id,
    userThumbnail: res.user.profile_image.medium,
    portfolioLink: res.user.social.portfolio_url ?? '',
  };
});
</script>

<template>
  <main class="one-image">
    <div class="container">
      <div class="one-image__wrapper">
        <div class="one-image__header">
          <div class="one-image__box">
            <img :src="imageItem.userThumbnail" alt="User" />
            <h2 class="title">{{ imageItem.username }}</h2>
            <a :href="imageItem.portfolioLink">@{{ imageItem.socials }}</a>
          </div>

          <div class="one-image__action">
            <button
              class="one-image__favorite-btn"
              @click="
                () => {
                  imageItem.isFavorite = true;
                  store.putFavorite(imageItem);
                }
              "
            >
              <FavoriteBlackIcon v-if="!imageItem.isFavorite" />
              <FavoriteYellowIcon
                v-else-if="imageItem.isFavorite"
              ></FavoriteYellowIcon>
            </button>
            <button class="one-image__download">
              <a :href="imageItem.download"> Загрузить</a>
            </button>
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

  &__box {
    display: grid;
    grid-template-areas: 'img title' 'img link';
    column-gap: 10px;

    img {
      grid-area: img;
      border: 1px solid #ffffff;
      border-radius: 8px;
    }
    h2 {
      grid-area: title;
      font-size: 30px;
      line-height: 120%;
      color: #f2f2f2;
    }
    a {
      grid-area: link;
      font-size: 18px;
      line-height: 120%;
      color: #f2f2f2;
    }
  }

  &__favorite-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
    background-color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
}
</style>
