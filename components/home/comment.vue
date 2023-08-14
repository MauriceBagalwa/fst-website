<template>
  <div class="section_container section__padding">
    <img src="/images/_nicon_5.png" alt="comment" />
    <p class="container__descrption">{{ _description }}</p>
    <div class="container__personne">
      <p class="__name">{{ _name }}</p>
      <p class="__function">{{ _function }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _description =
  "Merci à l’équipe Apparence ! Le travail réalisé sur la maquette de notre application mobile s’est déroulé selon nos attentes, et avec un bon niveau d’accomplissement. Cet outil que nous avons pu construire avec vous nous permettra de donner de la visibilité à nos clients sur notre vision.";

const _name = "Maurice Bin Bagalwa";
const _function = "CEO - We Are Caring";
</script>

<style lang="scss" scoped>
.section_container {
  height: 90vh;
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-align: center;
  background-color: #00000006;
  img {
    width: 280px;
    height: 300px;
    object-fit: contain;
  }

  .container__title {
    font-size: 25px;
    font-weight: 800;
    padding: 0 2px;
  }
  .container__descrption {
    color: rgb(66, 66, 66);
    letter-spacing: 1px;
    line-height: 25px;
    inline-size: 300px;
    text-align: center;
    position: relative;
    padding-bottom: 20px;
  }

  .container__descrption::before {
    content: "\201c";
    position: absolute;
    top: 15px;
    left: -25px;
    font-size: 80px;
  }

  .container__personne {
    .__name {
      font-weight: 800;
    }

    .__function {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
