<template>
  <div class="section_container section__padding">
    <div class="container__top">
      <div class="top_label">{{ _label }}</div>
      <p class="top__title">{{ _title }}</p>
      <p class="top__description">{{ _description }}</p>
    </div>

    <div class="container__cards">
      <div v-for="item in _data">
        <CardsService :data="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import i from "interface";

const _title = "Notre process et notre expertise";
const _label = "EXTPERTISE";
const _description =
  "Notre expérience, nous a permis de créer notre propre méthode de développement afin d’augmenter les interactions humaines, la rapidité des livrables et de prendre en compte les évolutions et les retours utilisateurs.";

const _data = [
  {
    title: "Stratégie",
    description:
      "Pour commencer, il est important pour nous de bien comprendre vos enjeux, vos problématiques et vos objectifs.",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574faa24f22711fe7aa43_icon_strategie.png",
  },
  {
    title: "UX Research",
    description:
      "Maintenant que la stratégie est claire, vous travaillerez en étroite collaboration avec notre équipe design. Des interviews seront réalisés avec les utilisateurs finaux pour identifier le comportement",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574fc7557f2d555a52bc7_icon_ux_research.png",
  },
  {
    title: "UI Design",
    description:
      "Dès la création du parcours utilisateur et des interfaces agréables, pratiques et faciles à prendre en main. Nos designer passent à la partie UI design",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574fa5f84c763e90856d3_icon_ui_design.png",
  },
  {
    title: "Développement",
    description:
      "Une fois les interfaces finalisées, nous lançons enfin notre équipe de développeur passionnée, développer votre application. Grâce à notre méthodologie Agile, vous recevez des versions testables toutes les semaines, ce qui vous laisse tout le temps",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574f9b3a3bba4c1d34f45_icon_developpement.png",
  },
  {
    title: "Tests",
    description:
      "L'une des étapes clés à ne pas négliger pour avoir une application de qualité, ce sont bien évidement les tests.",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574fa5f84c763e90856d3_icon_ui_design.png",
  },
  {
    title: "Lancement",
    description:
      "Vient l’heure du lancement en production, une étape que vous attendez avec impatience. Bien entendu, notre collaboration ne se termine pas là ! Nous continuerons à vous accompagner durant une période",
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/625574f964d8fe480aebd068_icon_lancement.png",
  },
];
</script>

<style lang="scss" scoped>
.section_container {
  width: 100%;
  min-height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // margin-bottom: 3rem;

  .container__top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
    min-height: 350px;

    .top_label {
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1.5px;
    }

    .top__title {
      font-size: 26px;
      font-weight: 800;
      padding: 0 2px;
    }

    .top__description {
      font-size: 20px;
      letter-spacing: 1px;
      line-height: 25px;
    }
  }

  .container__cards {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 60vh;
    gap: 3rem;
  }
}
</style>
