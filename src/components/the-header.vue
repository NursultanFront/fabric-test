<template>
  <header class="header">
    <div class="header__wrapper">
      <RouterLink to="/" class="header__logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { RouterLink } from 'vue-router';
</script>

<style scoped>
</style>
