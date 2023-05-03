<template>
  <main class="list-image">
    <div class="container">
      <div class="list-image__wrapper">
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
        <div class="list-image__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptates ex ut earum, possimus sint et quis enim pariatur amet
          sapiente animi obcaecati optio, numquam fugiat odio laborum quas
          dolores.
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.list-image {
  &__wrapper {
    padding: 114px 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  &__item {
    grid-column: span 4 / span 4;
  }
}
</style>
