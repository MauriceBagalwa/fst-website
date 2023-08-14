<template>
  <div class="section__about section__padding">
    <div class="about__image">
      <img src="/images/_nicon_2.png" />
    </div>
    <div class="card__content">
      <h2 class="about__label">{{ _label_designation }}</h2>
      <p class="about__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        placeat aliquam velit, distinctio, odio veritatis aperiam fuga vero,
        dolorum illum delectus beatae.
      </p>
      <div class="about__values">
        <p class="values__title">{{ _value_title }}</p>
        <div class="values__card">
          <div class="card card__one">
            <Icon name="uil:process" class="__icon" />
            <p class="content__title">Title valuer one</p>

            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              officiis dolorem, hic harum ab quos.
            </p>
          </div>

          <div class="card card__two">
            <Icon name="uil:telegram-alt" class="__icon" />
            <p class="content__title">Title two</p>

            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              officiis dolorem.
            </p>
          </div>

          <div class="card card__three">
            <Icon name="uil:presentation-line" class="__icon" />
            <p class="content__title">La derniere valeur</p>

            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              officiis dolorem, hic harum ab quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _label_designation = "Apropos de nous";
const _value_title = "avec comme valeurs";
</script>

<style lang="scss" scoped>
.section__about {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  .about__image {
    width: 330px;
    height: 330px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .card__content {
    margin: 0;
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
      width: 85%;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      padding: 0 1rem;

      .values__title {
        font-weight: 700;
      }

      .values__card {
        width: 100%;
        min-height: 550px;
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        margin-top: 2rem;
        position: relative;

        .card {
          position: absolute;
          display: flex;
          justify-content: center;
          display: flex;
          flex-direction: column;
          text-align: left;
          gap: 10px;
          inline-size: 250px;
          .__icon {
            font-size: 40px;
            color: #e39b55;
          }

          .content__title {
            font-weight: 700;
            color: #040404;
          }

          .card__description {
            color: rgb(66, 66, 66);
            inline-size: 230px;
          }
        }

        .card__one {
          left: 0;
          top: 0;
        }
        .card__two {
          right: -20px;
          transform: translateY(0px);
        }

        .card__three {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
