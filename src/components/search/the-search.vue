<template>
  <section class="search">
    <div class="container">
      <div class="search__wrapper">
        <form class="search__form form" @submit.prevent="onSubmit">
          <input
            v-model="searchValue"
            class="form__input"
            type="text"
            name="search"
            placeholder="Поиск"
          />
          <button class="form__btn" type="submit">Поиск</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useImageStore } from '@/stores/images';

const { searchByQuery } = useImageStore();

const searchValue = ref<string>('');

async function onSubmit() {
  const value: string = searchValue.value;
  await searchByQuery(value);
}
</script>

<style scoped lang="scss">
.search {
  background-image: url('@/assets/background-search.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 92px 0 106px;
  }

  &__form {
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
    position: absolute;
    top: 50%;
    right: 34px;
    transform: translateY(-50%);
  }
}
</style>
