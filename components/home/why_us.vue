<template>
  <div class="why_container">
    <div class="container__top">
      <div class="container__body">
        <h2 class="container__title">{{ _title }}</h2>
        <p>{{ _description }}</p>
      </div>
      <div class="container__img">
        <img src="/images/_nrole_2.png" alt="why_us" />
      </div>
    </div>

    <div class="container__buttom">
      <div class="bt__left">
        <img src="/images/_ceo_2.png" alt="comment" />
      </div>
      <div class="bt__right">
        <div class="bt__personne">
          <h3 class="bt__title">Maurice Bin Bagalwa</h3>
          <p class="bt__post">C.E.O - Find Solution Tech</p>
        </div>
        <p class="bt__comment">
          Merci à l’équipe Apparence ! Le travail réalisé sur la maquette de
          notre application mobile s’est déroulé selon nos attentes, et avec un
          bon niveau d’accomplissement. Cet outil que nous avons pu construire
          avec vous nous permettra de donner de la visibilité à nos clients sur
          notre vision..
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _title = "Role/Pourquoi find solution technology";
const _description =
  "Depuis 2017, toutes nos applications Android et iOS sont développées avec Flutter. Après avoir utilisé plusieurs technologies, Flutter est la technologie qui satisfait aussi bien nos clients que notre équipe.";
</script>

<style lang="scss" scoped>
@media all and (min-width: 1024px) {
  .why_container {
    display: flex;
    flex-direction: column;
    // background-color: red;
    min-height: 20vh;
    padding: 5rem 8rem;
    gap: 80px;
    margin-bottom: 4rem;

    //   padding-top: 4rem;

    .container__top {
      display: flex;
      .container__body {
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: center;
        //     background-color: #737b7d;
        width: 50%;
        //     align-items: ;
        gap: 20px;
        .container__title {
          font-size: 30px;
          font-weight: 800;
          padding: 0 2px;
          inline-size: 60%;
        }

        p {
          font-size: 1.25rem;
          inline-size: 95%;
          color: #737b7d;
          line-height: 2rem;
        }
      }

      .container__img {
        display: flex;
        justify-content: center;
        position: relative;
        //     background-color: red;
        width: 50%;

        img {
          position: absolute;
          top: -82%;
          width: 80%;
          right: -5%;
          object-fit: contain;
        }
      }
    }

    .container__buttom {
      display: flex;
      position: relative;
      gap: 30px;
      .bt__left {
        width: 250px;
        position: relative;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      .bt__right {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-left: 20px;
        // margin-right: 50px;

        .bt__personne {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 40%;

          .bt__post {
            font-weight: 400;
            font-size: 15px;
          }
        }

        .bt__comment {
          inline-size: 90%;
          line-height: 29px;
          font-size: 17px;
        }
        // .
      }

      .bt__right::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 90%;
        background: #737b7d;
        left: 23%;
        border-radius: 5px;
        // margin-right: px;
      }
    }
  }
}
</style>
