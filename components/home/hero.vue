<template>
  <div class="section__parent">
    <h1 class="hero__title">
      Nous trouvons des solutions simples pour des produits complexes.
    </h1>

    <p class="hero__description">
      <!-- Find Solution Tech est une agence de développement mobile spécialisée dans
        Flutter. 30+ apps réalisées. -->
      Find Solution Tech dolor sit amet consectetur adipisicing elit. Voluptates
      beatae perferendis suscipit libero Lorem des application de la place à
      Goma.
    </p>

    <div class="hero__button">
      <NuxtLink class="hero__button" to="#_iabout">
        Apprendre plus sur nous
        <Icon name="uil:arrow-down" class="hbutton__icon" />
      </NuxtLink>
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
  padding: 0 1rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding-top: 25%;
  // margin-bottom: 5%;

  .hero__title {
    text-align: center;
    position: relative;
    font-size: 38px;
    inline-size: 95%;
    display: flex;
    justify-content: center;
    // align-items: center;
  }

  .hero__title::before {
    content: "# S T A R T - U P";
    position: absolute;
    font-size: 11px;
    margin-top: -30px;
    background: #e39b55;
    border-radius: 3px;
    padding: 4px 20px;
    color: #ffffff;
    opacity: 0.9;
  }

  .hero__description {
    font-size: 19px;
    letter-spacing: 1px;
    line-height: 26px;
    inline-size: 85%;
    color: rgba(0, 0, 0, 0.653);
  }

  .hero__button {
    .hero__button {
      text-decoration: none;
      font-size: 16.5px;
      font-weight: 700;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 5px;
      //       position: relative;
      color: black;
      padding: 0 14px;
      cursor: pointer;
    }
    .hbutton__icon {
      //   position: absolute;
      //   top: -5px;
      //   right: -35px;
      font-size: 30px;
      color: rgba(0, 0, 0, 0.984);
    }
  }

  .partner {
    height: 1%;
  }
  // }
}

// @media all and (min-width: 768px) {
//   .section__parent {
//     // background-color: red;
//     height: 65vh;
//     justify-content: center;
//     align-items: center;
//     .hero {
//       // padding: 0 1rem;
//       .hero__title {
//         inline-size: 95%;
//         font-size: 45px;
//       }
//       .hero__description {
//         font-size: 22px;
//         line-height: 35px;
//         inline-size: 90%;
//       }

//       .hero__title::before {
//         padding: 0;
//         width: 290px;
//         height: 45px;
//         font-size: 18px;
//         left: 30%;
//         right: 30%;
//         opacity: 0.7;
//       }

//       .hero__button {
//         button {
//           font-size: 22px;
//         }
//       }
//     }
//   }
// }

@media all and (min-width: 1024px) {
  .section__parent {
    // background-color: blue;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    text-align: center;
    width: auto;
    margin-bottom: 0;
    padding-top: 2.5%;

    // background-color: red;

    .hero__title {
      font-size: 3.7rem;
      inline-size: 80%;
    }

    .hero__title::before {
      // width: 150px;
      // height: 5px;
      // padding: 10px 8px;
      // font-size: 11px;
      // font-weight: 700;
      // top: 10px;
    }

    .hero__description {
      inline-size: 65%;
    }
  }
  //   }
}
</style>
