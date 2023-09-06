<template>
  <div class="about__container">
    <div class="container__top">
      <h2 class="container__title">{{ _title }}</h2>
      <p class="about__description m__description">{{ _description }}</p>
    </div>

    <div class="container__cards">
      <div v-for="item in _data.slice(0, 10)">
        <CardsRealisation :data="item" />
      </div>
    </div>

    <HomeCustomer />
    <CardsContact />
  </div>
</template>

<script lang="ts" setup>
import bd from "../src/utils/db.json";
const _title = "L'art de créer des applications mobiles uniques";
const _description =
  "Depuis 2017, nous avons accompagné plus de 30 clients dans la conception, l’UX/UI design et le développement de leurs applications mobiles sur Android et iOS.";

const _data = bd.portofolio;
</script>

<style lang="scss" scoped>
.about__container,
.container__top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
//   width: 100%;
.about__container {
  // ga
  .container__top {
    min-height: 70vh;
    text-align: center;
    gap: 20px;
  }

  .container__title {
    text-align: center;
    position: relative;
    inline-size: 80%;
    font-size: 3.7rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .about__description {
    inline-size: 70%;
  }

  .container__cards{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
