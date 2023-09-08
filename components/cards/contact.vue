<template>
  <div class="section_container section__padding">
    <p class="container__title">{{ _title }}</p>
    <span class="__circle"></span>
    <p class="container__descrption">{{ _description }}</p>
    <!-- <button>
        Contactez nous <Icon name="uil:arrow-up-right" class="bt__icon" />
      </button> -->
  </div>
</template>

<script lang="ts" setup>
const _title = "Work together for succes";
const _description =
  "Merci à l’équipe Apparence ! Le travail réalisé sur la maquette de notre application mobile s’est déroulé selon nos attentes.";
</script>

<style lang="scss" scoped>
.section_container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  position: relative;
  padding-left: 40%;
  .__circle {
    // content: "";
    position: absolute;
    background: #e39b55;
    width: 200px;
    height: 200px;
    z-index: 0;
    border-radius: 50%;
    left: 30%;
  }
}

@media all and (min-width: 1024px) {
  .section_container {
    // background-color: red;
    .container__title {
      font-size: 3.5rem;
      inline-size: 45%;
      text-align: left;
      font-weight: 700;
      z-index: 2;
    }
    .container__descrption {
      font-weight: 500;
      font-size: 1.25rem;
      color: #737b7d;
      line-height: 2rem;
      inline-size: 65%;
      text-align: left;
      z-index: 2;
    }
  }
}
</style>
