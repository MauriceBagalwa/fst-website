<template>
  <div class="section_container section__padding">
    <p class="container__descrption">{{ _description }}</p>
    <button>
      Contactez nous <Icon name="uil:arrow-up-right" class="bt__icon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const _description =
  "Merci à l’équipe Apparence ! Le travail réalisé sur la maquette de notre application mobile s’est déroulé selon nos attentes.";
</script>

<style lang="scss" scoped>
.section_container {
  height: 35vh;
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e39b55;
  border-radius: 10px;
  margin: 1.5rem;
  text-align: center;
  gap: 2rem;
  font-weight: bold;
  color: #ffffffde;

  button {
    color: #ffffffde;
    text-transform: none;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #ffffffde;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.75rem;

    .bt__icon {
      font-size: 19px;
    }
  }
}
</style>
