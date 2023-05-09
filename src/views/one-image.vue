<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '@/api/indext';

import { useImageStore, type OneImage } from '@/stores/images';
import FavoriteBlackIcon from '@/components/icons/FavoriteBlackIcon.vue';
import FavoriteYellowIcon from '@/components/icons/FavoriteYellowIcon.vue';
import DownloadIcon from '@/components/icons/DownloadIcon.vue';
import axios from 'axios';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const store = useImageStore();

const isError = ref<boolean>(false);
const isLoaded = ref<boolean>(false);

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

function checkFavorite(value: OneImage) {
  const index = store.favorite.findIndex((item) => item.id === value.id);
  if (index === -1) {
    imageItem.value.isFavorite = true;
    store.putFavorite(imageItem.value);
  } else {
    imageItem.value.isFavorite = false;
    store.deleteFavorite(imageItem.value, index);
  }
}

const downloadPhoto = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/${imageItem.value.id}/download`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
        },
        responseType: 'blob',
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', `unsplash_photo_${imageItem.value.id}.jpg`);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  try {
    isLoaded.value = true;
    const res = await api.images.oneImage(props.id);

    imageItem.value = {
      download: res.links.download,
      img: res.urls.regular,
      socials: res.user.twitter_username ?? res.user.instagram_username,
      username: res.user.name,
      id: res.id,
      userThumbnail: res.user.profile_image.medium,
      portfolioLink: res.user.social.portfolio_url ?? '',
      isFavorite: store.favorite.some((item) => {
        return item.id == res.id;
      }),
    };
  } catch (error) {
    isError.value = true;
  } finally {
    isError.value = false;
    isLoaded.value = false;
  }
});
</script>

<template>
  <main class="one-image">
    <div class="container">
      <div class="one-image__wrapper">
        <div class="one-image__header">
          <div v-if="isLoaded" class="loading">Loading</div>
          <div v-else-if="!isError && !isLoaded" class="one-image__box">
            <img :src="imageItem.userThumbnail" alt="User" />
            <h2>{{ imageItem.username }}</h2>
            <a :href="imageItem.portfolioLink">@{{ imageItem.socials }}</a>
          </div>
          <div v-else-if="isError" class="error">Error</div>

          <div class="one-image__action">
            <button
              class="one-image__favorite-btn"
              @click="checkFavorite(imageItem)"
            >
              <FavoriteBlackIcon v-if="!imageItem.isFavorite" />
              <FavoriteYellowIcon
                v-else-if="imageItem.isFavorite"
              ></FavoriteYellowIcon>
            </button>
            <button class="one-image__download" @click="downloadPhoto">
              <DownloadIcon />
              <span> Download</span>
            </button>
          </div>
        </div>

        <div class="one-image__content">
          <img
            v-if="!isError && !isLoaded"
            :src="imageItem.img"
            alt="image"
          />

          <p class="loading" v-else-if="isLoaded">Loading</p>
          <p class="Error" v-else-if="isError">Error</p>
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
  background-size: auto;
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
    border-radius: 8px;

    max-height: 800px;
    img {
      border-radius: 8px;
      width: 100%;
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

  &__action {
    display: flex;
    align-items: center;
    gap: 20px;
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

  &__download {
    padding: 7px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff200;
    border: 1px solid #fff200;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: var(--vt-c-black);
    }
  }

  .loading,
  .error {
    color: #f2f2f2;
  }
}
</style>

<style scoped lang="scss">
@media (max-width: 1024px) {
  .one-image {
    &__wrapper {
      padding: 31px 0 60px;
    }

    &__content {
      max-height: 600px;
    }
  }
}

@media (max-width: 768px) {
  .one-image {
    background-image: none;

    &__content {
      img {
        object-fit: cover;
      }
    }

    &__download {
      padding: 7px 7px;
      span {
        display: none;
      }
    }

    &__box {
      h2 {
        font-size: 18px;
        color: #000000;
      }
      a {
        font-size: 14px;
        color: #bdbdbd;
      }
    }

    .loading,
    .error {
      color: #000000;
    }
  }
}

@media (max-width: 576px) {
  .one-image {
    background-image: none;

    &__content {
      max-height: 321px;
    }
  }
}
</style>
