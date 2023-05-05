<template>
  <header class="header">
    <div class="container">
      <div
        class="header__wrapper"
        :class="{
          'header__wrapper--main': isSearch,
          'header__wrapper--other': !isSearch,
        }"
      >
        <RouterLink to="/" class="header__logo">
          <img src="@/assets/logo.png" alt="Logo" :width="widthLogo" />
        </RouterLink>

        <nav class="header__nav nav">
          <RouterLink to="/" class="nav__link" v-if="!isSearch">
            <LoupeWhite />
            <span>Поиск</span>
          </RouterLink>

          <RouterLink to="/favorite" class="nav__link">
            <FavoriteWhiteIcon v-if="!isFavorite" />
            <FavoriteYellowIcon v-else />
            <span>Избранное</span>
          </RouterLink>
        </nav>
      </div>
    </div>
    <Search v-if="isSearch"></Search>
    <div class="app-grey-bottom" v-show="isGrayLine"></div>
  </header>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Routes } from '@/router/route';

import Search from '../search/the-search.vue';

import FavoriteWhiteIcon from '../icons/FavoriteWhiteIcon.vue';
import FavoriteYellowIcon from '@/components/icons/FavoriteYellowIcon.vue';
import LoupeWhite from '../icons/LoupeWhite.vue';

const route = useRoute();

const mainWidth = 185;
const otherWidth = 112;

const widthLogo = ref<number>(0);
const isSearch = ref<boolean>(false);
const isGrayLine = ref<boolean>(true);
const isFavorite = ref<boolean>(false);

function headerKit(
  width: number,
  search: boolean,
  gray: boolean,
  fav: boolean
) {
  widthLogo.value = width;
  isSearch.value = search;
  isGrayLine.value = gray;
  isFavorite.value = fav;
}

watch(
  () => route.name,
  (value) => {
    if (value == Routes.ONEIMAGE) {
      headerKit(otherWidth, false, false, false);
    } else if (value == Routes.HOME) {
      headerKit(mainWidth, true, true, false);
    } else if (value == Routes.FAVORITE) {
      headerKit(otherWidth, false, true, true);
    }
  }
);
</script>

<style scoped lang="scss">
.header {
  background-color: var(--vt-c-black);

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--other {
      padding: 24px 0;
    }

    &--main {
      padding: 37px 0;
    }
  }

  &__logo {
    display: flex;
  }

  &__nav {
    & > * {
      color: var(--vt-c-white);
    }
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 38px;
  &__link {
    display: flex;
    align-items: center;
    gap: 9px;
  }
}
</style>

<style scoped lang="scss">
@media (max-width: 1024px) {
  .header {
    &__wrapper {
      &--main {
        padding: 24px 0;
      }
    }

    &__logo {
      img {
        width: 150px;
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__logo {
      img {
        width: 100px;
      }
    }
  }

  .nav {
    & span {
      display: none;
    }
  }
}

@media (max-width: 576px) {
  .header {
    &__logo {
      img {
        width: 84px;
      }
    }
  }
}
</style>
