<template>
  <div class="section__parent">
    <!-- <img src="/images/_card.jpg" /> -->
    <div class="hero">
      <h1 class="hero__title">
        Nous trouvons des solutions simples pour des produits complexes.
      </h1>

      <p class="hero__description">
        <!-- Apparence est une agence de développement mobile spécialisée dans Flutter.
      30+ apps réalisées. -->
        Find Solution Tech dolor sit amet consectetur adipisicing elit.
        Voluptates beatae perferendis suscipit libero Lorem des application de
        la place à Goma.
      </p>

      <div class="hero__button">
        <button>
          Apprendre plus sur nous
          <div class="btn__icon"></div>
          <Icon name="uil:arrow-down" class="hbutton__icon" />
        </button>
      </div>
    </div>
    <!-- <HomePartners class="partner" /> -->
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {});
</script>
<style lang="scss">
.section__parent {
  position: relative;
  height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 2rem;

  img {
    position: absolute;
    width: 100%;
    height: 65vh;
    left: 0;
    right: 0;
    top: -100px;
    z-index: 5;
    opacity: 0.17;
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding: 0 1rem;
    padding-top: 3rem;
    gap: 3rem;
    text-align: center;
    margin: 0;
    z-index: 10;

    .hero__title {
      position: relative;
      font-size: 38px;
      line-height: 45px;
      // font-weight: 700;
      padding-top: 3rem;
    }

    .hero__title::before {
      content: "# PLATFORM BUSINESS";
      position: absolute;
      top: -20px;
      left: 25%;
      width: 180px;
      height: 30px;
      background: #e39b55;
      color: #ffffff;
      font-size: 10px;
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      border-radius: 2px;
    }

    .hero__description {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 25px;
      // color: rgb(0, 0, 0);
    }

    .hero__button {
      // margin-top: 1rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 5px;

      button {
        font-size: 16px;
        font-weight: 700;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        gap: 5px;
        position: relative;
      }
      .hbutton__icon {
        position: absolute;
        top: -5px;
        right: -35px;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.984);
      }
    }

    .partner {
      height: 1%;
    }
  }
}
</style>
