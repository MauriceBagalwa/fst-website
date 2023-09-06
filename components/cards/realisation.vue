<template>
  <div class="card__container">
    <div class="card__body">
      <p class="card__title">{{ props.data.title }}</p>
      <p class="card__description">
        {{ props.data.description }}
      </p>
      <div class="genres">
        <div v-for="str in props.data.genres">
          <p class="card__genre">#{{ str }}</p>
        </div>
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
  min-height: 450px;
  // background-color: #e09a3d8e;
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

@media all and (min-width: 1024px) {
  .card__container {
    // transform: scale(0,75);
    transition: all 0.7s;

    flex-direction: row;
    padding: 5rem 7rem;
    .card__body {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: #ffffff;
      .card__title {
        font-size: 45px;
      }

      .card__description {
        inline-size: 70%;
        font-size: 18px;
      }

      .genres {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 400px;

        .card__genre {
          padding: 4px 15px;
          border-radius: 4px;
          color: #fff;
          background-color: #ffffff26;
          font-size: 11px;
          font-weight: 700;
          text-align: center;

          font-size: 15.5px;
        }
      }
    }

    .card__img {
      // position: relative;
      width: 40%;
      img {
        width: 100%;
        height: 100%;
        // height: 290px;
        object-fit: contain;
      }
    }
  }

  .card__container:hover {
    // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    // box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    cursor: pointer;
    box-shadow: rgba(120, 116, 116, 0.494) 0px 10px 50px;
  }
}
</style>
