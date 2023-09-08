<!-- <template>
  <div class="card">
    <div class="image__card">
      <img :src="`${props.data.image_ul}`" alt="" />
    </div>
    <p class="card__title">{{ props.data.title }}</p>
    <p class="card__description">{{ props.data.description }}</p>
  </div>
</template> -->

<template>
  <div class="card">
    <div class="card__icon">
      <Icon :name="props.data.icon" class="__icon" />
    </div>

    <div class="card__body">
      <p class="card__title">{{ props.data.title }}</p>
      <p class="card__description">{{ props.data.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";
const props = defineProps<{ data: i.IServiceCard }>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  cursor: pointer;
  width: 260px;
  height: 300px;
  background-color: var(--bc-card);
  flex-direction: column;
  padding: 1rem;
  gap: 10px;

  .card__icon {
    height: 30%;
    background-color: #E0FFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    .__icon {
      font-size: 30px;
      color: #99FFFF;
    }
  }
  // padding: 2rem 1.2rem;
  // gap: 8%;
  // border: 1px solid rgba(18, 18, 18, 0.092);
  // border-radius: 10px;
  // height: 450px;

  .card__body {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    // background-color: blanchedalmond;
    .card__title {
      font-size: 15px;
      font-weight: 700;
    }

    .card__description {
      width: 100%;
      text-align: left;
      letter-spacing: 1px;
      line-height: 19px;
      font-size: 13px;
    }
  }
}
</style>
