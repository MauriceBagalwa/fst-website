<template>
  <div class="section__about section__padding"  id="_iabout">
    <div class="about__image" >
      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080,quality=80/front-static/pages/home/home-hero.png"
      
        />
    </div>
    <div class="card__container">
      <div class="container_left">
        <h2 class="left__label">
          {{ _label_designation }}
        </h2>
        <p class="left__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          placeat aliquam velit, distinctio, odio veritatis aperiam fuga vero,
          dolorum illum delectus beatae.
        </p>
        <button class="left__button">
          {{ _bt_designation }}
          <!-- <Icon name="uil:arrow-down" class="left__bt__icon" /> -->
        </button>
        <!-- <img src="/images/_smile.png" alt="about_us" class="left_img" /> -->
        <img src="/images/_nabout_us.png" alt="about_us" class="left_img_2" />
      </div>

      <div class="container__right">
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

        <div class="card card__four">
          <Icon name="uil:presentation-line" class="__icon" />
          <p class="content__title">La derniere valeur</p>

          <p class="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            officiis dolorem, hic harum ab quos.
          </p>
        </div>
      </div>
    </div>

    <div class="container__button">
      <h2 class="button__title">Lorem ipsum dolor sit amet adipisicing elit</h2>
      <div class="button__cards">
        <div class="card__model">
          <div class="card__body">
            <h2>Productive</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolore, modi et placeat tenetur quam, nisi accusamus eveniet iusto
              praesentium, quos consectetur enim.
            </p>
          </div>

          <div class="card__image">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
              alt=""
            />
          </div>
        </div>
        <!-- --- -->

        <div class="card__two__model">
          <div class="card__two__image">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
              alt=""
            />
          </div>
          <div class="card__two__body">
            <h2>Optimiser</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolore, modi et placeat tenetur quam, nisi accusamus eveniet iusto
              praesentium, quos consectetur enim.
            </p>
          </div>
        </div>

        <div class="card__model">
          <div class="card__body">
            <h2>Qualité</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolore, modi et placeat tenetur quam, nisi accusamus eveniet iusto
              praesentium, quos consectetur enim.
            </p>
          </div>

          <div class="card__image">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="cbutton__display">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const _label_designation = "Apropos de nous";
const _label_designation =
  "Apropos de nous lorem ipsum dolor sit amet adipisicing elit.";

const _value_title = "avec comme valeurs";
const _icon = "uil:telegram-alt";
const _bt_designation = "En savoir plus";
</script>

<style lang="scss" scoped>
.section__about {
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 40px;
  margin-top: 22%;
  .about__image {
    width: 100%;
    display: flex;
    img {
      width: 100%;
      margin: auto;
      object-fit: contain;
    }
  }

  .card__container {
    .container_left {
      display: flex;
      flex-direction: column;
      gap: 15px;
      position: relative;

      .left__label {
        font-size: 26px;
        font-weight: 800;
        padding: 0 2px;
        text-align: center;
      }

      .left__description {
        font-size: 17px;
        letter-spacing: 1px;
        line-height: 25px;
        // inline-size: 90%;
        color: rgba(0, 0, 0, 0.653);
        text-align: center;
      }
      .left_img {
        display: none;
      }
    }

    .container__right {
      .card {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .__icon {
          font-size: 25px;
          // color: #e39b55;
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
    }
  }
}

@media all and (min-width: 768px) {
  .section__about {
    margin-top: 0;
  }
}

@media all and (min-width: 1024px) {
  .section__about {
    gap: 10px;
    // background-color: red;

    .about__image {
      img {
        width: 60%;
      }
    }

    .card__container {
      display: flex;
      margin-top: 120px;
      // display: ;
      .container_left {
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: 60%;

        .left__label {
          font-size: 30px;
          inline-size: 75%;
          text-align: left;
        }

        .left__description {
          font-size: 20px;
          line-height: 30px;
          inline-size: 90%;
          text-align: left;
        }

        .left__button {
          width: 35%;
          padding: 15px 0px;
          font-weight: bold;
          font-size: 16px;
          border: none;
          background-color: #090909e0;
          color: #fffffff0;
          border-radius: 4px;
          width: 200px;
        }

        .left_img {
          display: block;
          position: absolute;
          width: 11%;
          object-fit: contain;
          right: 30%;
          top: 40%;
          transform: rotate(-22deg);
        }

        .left_img_2{
          display: block;
          position: absolute;
          width: 60%;
          object-fit: contain;
          right: 18%;
          top: 30%;
          // transform: rotate(-22deg);
        }
      }

      .container__right {
        display: flex;
        flex-wrap: wrap;
        width: 60%;

        .card {
          width: 42%;
          display: flex;
          flex-direction: column;
          margin-bottom: 3%;
          border: 1px solid rgba(18, 18, 18, 0.092);
          height: 350px;
          gap: 8%;
          margin-left: 30px;
          border-radius: 10px;
          padding: 40px;
          justify-content: center;

          .__icon {
            font-size: 35px;
          }

          .content__title {
            font-size: 20px;
          }

          .card__description {
            font-size: 18px;
            inline-size: 100%;
          }
        }
      }
    }

    .card__container::before {
      content: "# Q U I - N O U S - S O M M E S";
      position: absolute;
      font-size: 11px;
      margin-top: -80px;
      background: #e39b55;
      border-radius: 3px;
      padding: 8px 20px;
      color: #ffffff;
      opacity: 0.9;
      font-weight: 800;
      margin-left: 42%;
    }
    .container__button {
      width: 100%;
      min-height: 40vh;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      .button__title {
        font-weight: 800;
        font-size: 22px;
        inline-size: 20%;
        margin-right: 5%;
        text-align: center;
      }

      .button__cards {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        position: relative;

        .card__model {
          display: flex;
          padding-left: 150px;

          .card__body {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 50%;
            padding: 2rem 0;
            p {
              inline-size: 95%;
              font-size: 20px;
              line-height: 30px;
              text-align: left;
            }
          }

          .card__image {
            display: flex;
            img {
              width: 85%;
              object-fit: contain;
            }
          }
        }

        .card__two__model {
          display: flex;
          // padding-left: 150px;

          .card__two__body {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 55%;
            padding-top: 2rem;
            padding-left: 2.5rem;
            p {
              inline-size: 75%;
              font-size: 20px;
              line-height: 30px;
              text-align: left;
            }
          }

          .card__two__image {
            display: flex;
            width: 45%;
            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
}
</style>
