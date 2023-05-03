<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <RouterLink to="/" class="header__logo">
          <img src="@/assets/logo.png" alt="Logo" />
        </RouterLink>

        <RouterLink class="header__favorite" to="/favorite">
          <span>Избранное</span>
        </RouterLink>
      </div>
    </div>
    <div class="header__grey-bottom"></div>
  </header>
</template>

<script setup lang="ts">
import type { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.header {
  background-color: var(--vt-c-black);

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 37px 0;
  }

  &__logo {
  }

  &__favorite {
    color: var(--vt-c-white);
  }

  &__grey-bottom {
    width: 100%;
    height: 16px;
    background-color: #c4c4c4;
  }
}
</style>
