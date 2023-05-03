<template>
  <main class="favorite">
    <div class="container">
      <div class="favorite__wrapper">
        <h2 class="favorite__title">Избранное</h2>
        <ul class="favorite__list">
          <li class="favorite__item"></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

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

  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  &__item {
    grid-column: span 4 / span 4;
  }
}
</style>
