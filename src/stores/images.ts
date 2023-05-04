import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const favorite = ref([]);

  return { favorite };
});
