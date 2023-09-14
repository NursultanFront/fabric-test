<template>
  <ListImage
    :list="store.imagesList"
    :error="store.isError"
    :loading="store.isLoaded"
    :empty-list="store.isEmpty"
  />
</template>

<script lang="ts" setup>
import ListImage from '@/components/list-image/list-image.vue';
import { onMounted } from 'vue';
import { useImageStore } from '@/stores/images';

const store = useImageStore();

onMounted(() => {
  store.getRandomImage();
});
</script>

<style></style>
