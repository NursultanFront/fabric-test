<template>
  <section class="search">
    <div class="search__back-black"></div>
    <div class="container">
      <div class="search__wrapper">
        <form class="search__form form" @submit.prevent="onSubmit">
          <input
            v-model="store.searchText"
            class="form__input"
            type="text"
            name="search"
            placeholder="Поиск"
          />
          <button class="form__btn" type="submit"><LoupeIcon /></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/images';
import LoupeIcon from '@/components/icons/LoupeIcon.vue';

const store = useImageStore();

const onSubmit = async () => {
  await store.searchByQuery();
};
</script>

<style scoped lang="scss">
.search {
  position: relative;
  background-image: url('@/assets/background-search.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 92px 0 106px;
  }

  &__back-black::before {
    position: absolute;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.form {
  position: relative;
  width: 58.55%;
  &__input {
    padding: 21px 39px;
    width: 100%;
  }
  &__btn {
    display: flex;
    position: absolute;
    top: 50%;
    right: 34px;
    transform: translateY(-50%);
  }
}
</style>

<style scoped lang="scss">
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .form {
    width: 100%;
  }
}

@media (max-width: 576px) {
}
</style>
