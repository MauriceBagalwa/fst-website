<template>
  <div class="blog__card">
    <!-- <h1>Tex blog</h1> -->
    <div
      class="image__card"
      v-bind:style="{ backgroundImage: `url(${props.data.image_url})` }"
    >
      <img :src="`${props.data.image_url}`" alt="" />
    </div>
    <div class="card__body">
      <p class="card__title">{{ props.data.designation }}</p>
      <p class="card__date">
        <Icon name="uil:calendar-alt" class="bt__icon" />
        {{ props.data.publish_at }}
      </p>
    </div>

    <div class="card__author">
      <div class="author__image">
        <img :src="`${props.data.author.avatar}`" alt="" />
      </div>
      <p class="author__name">{{ props.data.author.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";
const props = defineProps<{ data: i.IBlog }>();
</script>

<style lang="scss" scoped>
.blog__card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // background-color: red;
  // background-color: #00000006;
  .image__card {
    width: 100%;
    position: relative;
    height: auto;
    display: flex;
    background-color: transparent;
    // background-image: url(v-bind("props.data.image_url"));

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card__body {
    display: flex;
    flex-direction: column;
    height: 30%;
    padding: 5px 18px;
    // background-color: blue;
    gap: 8px;
    .card__title {
      font-size: 18px;
      font-weight: 700;
    }

    .card__date {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .card__author {
    width: 100%;
    height: 5%;
    padding: 0 18px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;

    .author__image {
      width: 10%;
      img {
        border-radius: 50%;
        width: 100%;
      }
    }

    .author__name {
      font-size: 13px;
      font-weight: 700;
    }

    // background-color: red;
  }
  // background-color: blue;
}

.blog__card:hover {
  border: 1px solid #b0a0a036;
  cursor: pointer;
  border-radius: 10px;
  // transition: 1s;

  .image__card {
    img {
      border-radius: 4px;
      // transition: 0.3s;
    }
  }
}
</style>
