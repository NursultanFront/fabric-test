<template>
  <ListImage :list="store.imagesList" />
</template>

<script lang="ts" setup>
import Search from '@/components/search/the-search.vue';
import ListImage from '@/components/list-image/list-image.vue';
import { onMounted } from 'vue';
import { useImageStore } from '@/stores/images';

const store = useImageStore();

onMounted(() => {
  store.getRandomImage();
});
</script>

<style></style>
