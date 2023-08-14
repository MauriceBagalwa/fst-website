<template>
  <div class="card__container">
    <p class="card__title">{{ props.data.title }}</p>
    <p class="card__description">
      {{ props.data.description }}
    </p>
    <div class="genres">
      <div v-for="str in props.data.genres">
        <p class="card__genre">#{{ str }}</p>
      </div>
    </div>
    <div class="card__img">
      <img :src="props.data.image_ul" alt="project" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";
const props = defineProps<{ data: i.IRealisationCard }>();
</script>

<style lang="scss" scoped>
.card__container {
  width: 100%;
  min-height: 540px;
  background-color: #e09a3d8e;
  background-color: v-bind("props.data.bg_color");
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 2rem;
  gap: 20px;

  .card__title {
    font-size: 18px;
    font-weight: bold;
  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 250px;

    .card__genre {
      padding: 4px 15px;
      border-radius: 4px;
      color: #fff;
      background-color: #ffffff26;
      font-size: 11px;
      font-weight: 700;
      text-align: center;
    }
  }
  .card__img {
    position: relative;

    img {
      width: 295px;
      height: 290px;
      object-fit: contain;
    }
  }
}
</style>
