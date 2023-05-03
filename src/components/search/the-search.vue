<template>
  <section class="search">
    <div class="container">
      <div class="search__wrapper">
        <form class="search__form form">
          <input
            class="form__input"
            type="text"
            name="search"
            placeholder="Поиск"
          />
          <button class="form__btn" type="button">Поиск</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
