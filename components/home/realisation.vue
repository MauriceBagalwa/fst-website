<template>
  <div class="section_container section__padding">
    <p class="container__title">{{ _title }}</p>
    <div class="container__cards">
      <div v-for="item in _data.slice(0, 4)">
        <CardsRealisation :data="item" />
      </div>
    </div>

    <NuxtLink class="style__button caontainer__button" to="/portofolio">
      Voir tous nos projet
      <Icon name="uil:arrow-up-right" class="bt__icon" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";
import bd from "../../src/utils/db.json";

const { data } = defineProps<{ data: { show_title: boolean } }>();
const _title = "Nos realisations";
const _data: i.IRealisationCard[] = bd.portofolio;
</script>

<style lang="scss" scoped>
.section_container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;

  .container__title {
    font-size: 30px;
    // inline-size: 75%;
    font-weight: 800;
    padding: 0 2px;
  }

  .container__cards {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    color: #fff;
    gap: 2rem;
  }

  .caontainer__button {
    width: 18%;
    padding: 15px 25px;
    // font-weight: bold;
    font-size: 16px;
    // border: none;
    // background-color: #090909e0;
    // color: #fffffff0;
    // border-radius: 4px;
    // cursor: pointer;

    .bt__icon {
      font-size: 19px;
    }
  }
}
</style>
