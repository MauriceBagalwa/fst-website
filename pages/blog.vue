<template>
  <div class="p__container">
    <div class="container__top">
      <div class="top__left">
        <h2 class="top__title">{{ _title }}</h2>
        <p class="top__description m__description">{{ __description }}</p>
      </div>

      <div class="top__right">
        <div class="card__one"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _title = "Le blog spécialisé dans les applications mobiles & web";
const __description =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis omnis earum quis autem suscipit numquam, veniam sapiente architecto id fuga magnam vitae in?";
</script>

<style lang="scss" scoped>
.p__container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .container__top {
    height: 60vh;
    display: flex;
    gap: 25px;
    .top__left {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 20px;

      .top__title {
        font-size: 3rem;
        font-weight: 800;
      }
      .top__description {
        inline-size: 80%;
      }
    }

    .top__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: aqua;
      .card__one {
        position: relative;
        width: 200px;
        height: 120vh;
        background-color: red;
        border-radius: 1px 25px 25px 25px;

      }

      .card__one::before,
      ::after {
        position: absolute;
      }

      .card__one::before {
        content: "";
        top: 0px;
        width: 200px;
        height: 100px;
        background-color: blue;
      }

      .card__one::after {
        content: "";
        bottom: 0px;
        width: 200px;
        height: 100px;
        background-color: blue;
      }
    }
  }
}
</style>
