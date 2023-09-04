<template>
  <div class="p__container">
    <div class="container__top">
      <div class="top__left">
        <h2 class="top__title">{{ _title }}</h2>
        <p class="top__description m__description">{{ _description }}</p>
        <NuxtLink class="style__button top__bt" to="#_iabout">
          Decouvrir nos articles
          <Icon name="uil:arrow-down" class="bt__icon" />
        </NuxtLink>
        <img src="/images/_smile.png" class="top__img" alt="welcome" />
      </div>

      <div class="top__right">
        <div class="right__one">
          <div class="r__one __top init__bc"></div>
          <div class="r__one __center init__bc">
            <div class="c__top">
              <div class="top__txt">
                <h4>Titre pub</h4>
                <p>Lorem ipsum dolor. eum.</p>

                <p class="txt__length">+{{ _blogs_length }}</p>
              </div>
              <div class="top__card">
                <Icon name="uil:arrow-growth" class="__icon" />
              </div>
            </div>
            <div class="c__buttom">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio <span>temporibus</span> optio, ex est
                <span>maiores</span> eum vero accusantium tempore deleniti.
              </p>

              <NuxtLink class="card__button" to="#_iabout">
                En savoir plus
                <Icon name="uil:comment-alt-edit" class="hbutton__icon" />
              </NuxtLink>
            </div>
          </div>
          <div class="r__one __button init__bc">
            <p>Langanges de programmation & Framwork</p>
            <div class="bt__images">
              <div v-for="item in _images">
                <div class="img__card">
                  <img :src="item" alt="langage_de_progration" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right__two">
          <div class="r__two __top init__bc">
            <img src="/images/_ncube.png" alt="un_de_plus" />
          </div>
          <div class="r__two __center init__bc"></div>
        </div>
      </div>
    </div>

    <div class="container__botton">
      <div class="cb__left">
        <p class="left__title">Filtres</p>
        <div class="card__label"></div>
      </div>
      <div class="cb__right">
        <p class="left__right">Blog populaire de(''): {{ __cat }}</p>
        <div class="card__blog"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _title = "Le blog spécialisé dans les applications mobiles & web";
const _description =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis omnis earum quis autem suscipit numquam, veniam sapiente architecto id fuga magnam vitae in?";

const _images = [
  "/images/_adonis.png",
  "/images/_adonis.png",
  "/images/_adonis.png",
  "/images/_adonis.png",
];

const _blogs_length = 37;
const __cat = "Nuxtjs";
</script>

<style lang="scss" scoped>
.p__container {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  .container__top {
    min-height: 85vh;
    display: flex;
    gap: 25px;
    .top__left {
      position: relative;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 25px;

      .top__title {
        font-size: 3.7rem;
        font-weight: 700;
        inline-size: 85%;
      }
      .top__description {
        inline-size: 85%;
        position: relative;
      }

      .top__bt {
        font-size: 14px;
        width: 30%;

        .bt__icon {
          font-size: 22px;
        }
      }

      .top__img {
        position: absolute;
        width: 8%;
        right: 48%;
        bottom: 15%;
        transform: rotate(-15deg);
        opacity: 0.1;
      }
    }

    .top__right {
      display: flex;
      justify-content: center;
      width: 50%;
      gap: 20px;

      .right__one,
      .right__two {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .right__one {
        width: 65%;
        .r__one {
          width: 100%;
          // background-color: blue;
          border-radius: 0 20px 20px 20px;
        }

        .__top {
          height: 15%;
          // background-color: bisque;
          border-radius: 0 0 20px 0;
        }

        .__center {
          height: 60%;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 40px 30px;
          .c__top {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .top__txt {
              display: flex;
              flex-direction: column;
              gap: 5px;

              p {
                font-size: 13px;
              }

              .txt__length {
                font-size: 3rem;
                font-weight: 600;
                margin-top: 20px;
              }
            }
            .__icon {
              padding: 4px;
              display: flex;
              width: 35px;
              height: 35px;
              border: 1px solid black;
              border-radius: 5px;
              font-size: 140px;
            }
          }

          .c__buttom {
            display: flex;
            flex-direction: column;
            gap: 30px;
            p {
              font-size: 14px;
              inline-size: 90%;
              line-height: 22px;

              span {
                font-weight: bold;
              }
            }

            .card__button {
              text-decoration: none;
              width: 45%;
              padding: 10px 10px;
              font-weight: bold;
              font-size: 13px;
              border: none;
              background-color: #090909e0;
              color: #fffffff0;
              border-radius: 4px;
              text-align: center;
              // width: 200px;
            }
          }
        }

        .__button {
          height: 25%;
          // background-color: aquamarine;
          border-radius: 0 20px 0px 0px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          p {
            font-size: 14px;
            font-weight: 600;
            inline-size: 60%;
          }
          .bt__images {
            width: 100%;
            height: 80%;
            // background: red;
            display: flex;

            .img__card {
              position: relative;
              width: 25px;
              // ma: 10px;
              margin-right: 2px;
              // opacity: 1;
              // height: 10px;

              img {
                width: 100%;
                border-radius: 50%;

                //   width: 6%;
                //   background: blue;
              }
            }
          }
        }
      }

      .right__two {
        width: 35%;
        .r__two {
          width: 100%;
        }

        .__top {
          width: 100%;
          height: 50%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
        .__center {
          width: 100%;
          height: 50%;
        }
      }

      .init__bc {
        background-color: #00000006;
      }
    }
  }

  .container__botton {
    display: flex;
    width: 100%;
    gap: 40px;
    min-height: 50vh;
    margin-top: 6rem;

    background-color: red;
  }
}
</style>
