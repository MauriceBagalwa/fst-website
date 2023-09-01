<template>
  <div class="card">
    <div class="image__card">
      <img :src="`${props.data.image_ul}`" alt="" />
    </div>
    <p class="card__title">{{ props.data.title }}</p>
    <p class="card__description">{{ props.data.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";
const props = defineProps<{ data: i.IServiceCard }>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.2rem;
  // align-content: start;
  // gap: 20px;
  gap: 8%;
  // background-color: rgba(255, 255, 255, 0.475);
  border: 1px solid rgba(18, 18, 18, 0.092);
  border-radius: 10px;

  // border: 1px solid
  height: 450px;

  .card__title {
    // color:#3498db ;
    font-size: 20px;
    font-weight: 700;
  }
  .image__card {
    // background-color: aqua;
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .card__description {
    text-align: left;
    inline-size: 320px;
    letter-spacing: 1px;
    line-height: 25px;
  }
}
</style>
