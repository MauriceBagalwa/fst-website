<template>
  <div class="section__about">
    <img src="/images/_nicon_2.png" />
    <div class="card">
      <h2 class="about__label">{{ _label_designation }}</h2>
      <p class="about__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        placeat aliquam velit, distinctio, odio veritatis aperiam fuga vero,
        dolorum illum delectus beatae.
      </p>
      <div class="about__values">
        <p class="values__title">{{ _value_title }}</p>
        <div class="values__card">
          <div class="card__span"><p>#</p></div>
          <div class="card__span"><p>#</p></div>
          <div class="card__span"><p>#</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _label_designation = "Apropos de nous";
const _value_title = "Nos valeurs";
</script>

<style lang="scss" setup>
.section__about {
  min-height: 100vh;
  position: relative;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  img {
    position: absolute;
    width: 330px;
    top: 4%;
  }

  .card {
    margin: 0;
    margin-top: 75%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    text-align: center;
    gap: 20px;

    .about__label {
      font-weight: 800;
      margin-top: 1rem;
    }

    .about__description {
      font-size: 18px;
      padding: 0 1.1rem;
      letter-spacing: 1px;
      line-height: 25px;
    }

    .about__values {
      width: 100%;
      height: 80vh;
      .values__title {
        font-weight: 600;
      }

      .values__card {
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: top;
        margin-top: 4rem;
        padding-left: 3rem;
        gap: 19%;

        .card__span {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: red;
          font-size: 30px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 18px;
            font-weight: 800;
            text-align: center;
          }

          ::before {
            content: "";
            position: absolute;
            width: 3px;
            height: 100px;
            background: black;
            bottom: -6.2rem;
            left: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
