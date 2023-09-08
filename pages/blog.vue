<template>
  <div class="p__container">
    <div class="container__top">
      <div class="top__left">
        <h2 class="top__title">{{ _title }}</h2>
        <p class="top__description m__description">{{ _description }}</p>
        <NuxtLink class="style__button top__bt" to="#_iblogs">
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
    <div id="_iblogs"></div>
    <div class="container__botton">
      <div class="cb__left">
        <div class="cb__body">
          <p class="cb__title">
            Filtres <Icon name="uil:filter" class="bt__icon" />
          </p>
          <div class="card__label">
            <p class="lang__label" @click="get_blogs()">Tout</p>
            <div v-for="str in _blog_lang">
              <p @click="get_blogs(str)" class="lang__label">
                {{ str }}
              </p>
            </div>
          </div>

          <div class="cb__proposal">
            <p class="proposal__title">
              Vous ne trouvez pas ce que vous chercher ?
            </p>
            <p class="proposal__description">
              Laisse une demande dans notre boite à sugession pour avoir un
              article sur votre problem.
            </p>
            <NuxtLink class="style__button proposal__bt" to="#_iabout">
              Decouvrez nos articles
              <Icon name="uil:arrow-down" class="bt__icon" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="cb__right">
        <p class="cb__title">
          Blog populaire de (')
          <span class="cb__designation">" {{ _filter_designation }} "</span>
        </p>
        <div class="card__blog">
          <div v-for="blog in _blogs" class="__card">
            <CardsBlog :data="blog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import collect from "collect.js";
import i from "interface";

const _title = "Le blog spécialisé dans les applications mobiles & web";
const _description =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis omnis earum quis autem suscipit numquam, veniam sapiente architecto id fuga magnam vitae in?";

const _images = [
  "/images/_adonis.png",
  "/images/_adonis.png",
  "/images/_adonis.png",
  "/images/_adonis.png",
];

const _data = [
  {
    designation: "Props in vuejs 3",
    tag: "conseil",
    image_url:
      "https://th.bing.com/th/id/R.ee66e6cbd30f52391f19e323cb3ccedf?rik=bXpZ21CMyopiIA&pid=ImgRaw&r=0",
    lang: "vuejs",
    link: "",
    author: {
      name: "Jean luc",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-02-12",
  },
  {
    designation: "Zero to hero in uejs 3",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.4c3fbf54ffb437c9ccafb1a3b3ea21a9?rik=gLQ8DDLdnG%2bYSw&pid=ImgRaw&r=0",
    lang: "vuejs",
    link: "",
    author: {
      name: "Jean luc",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-05-06",
  },
  {
    designation: "Learn typescript to zero",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.8e0650fb51b34cd4d9f90ce029d475a5?rik=Aiu1gw5iut%2fYxg&pid=ImgRaw&r=0",
    lang: "typescript",
    link: "",
    author: {
      name: "Bin Bag",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/XqGOLSBVBk1215921693803113430IICzPIx1044.png",
    },
    publish_at: "2023-06-22",
  },
  {
    designation: "Move javascript to Typescript (in indina)",
    tag: "dev",
    image_url:
      "https://miro.medium.com/v2/resize:fit:1200/1*kP86hwG0w1EeU6S9UyZGFQ.jpeg",
    lang: "js",
    link: "",
    author: {
      name: "Kahozi Kahumba",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-08-05",
  },
  {
    designation: "Zero to hero in uejs 3",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.4c3fbf54ffb437c9ccafb1a3b3ea21a9?rik=gLQ8DDLdnG%2bYSw&pid=ImgRaw&r=0",
    lang: "vuejs",
    link: "",
    author: {
      name: "Jean luc",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-03-18",
  },
  {
    designation: "Learn typescript to zero",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.8e0650fb51b34cd4d9f90ce029d475a5?rik=Aiu1gw5iut%2fYxg&pid=ImgRaw&r=0",
    lang: "typescript",
    link: "",
    author: {
      name: "Bin Bag",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/XqGOLSBVBk1215921693803113430IICzPIx1044.png",
    },
    publish_at: "2022-11-22",
  },
  {
    designation: "Move javascript to Typescript (in indina)",
    tag: "dev",
    image_url:
      "https://miro.medium.com/v2/resize:fit:1200/1*kP86hwG0w1EeU6S9UyZGFQ.jpeg",
    lang: "js",
    link: "",
    author: {
      name: "Kahozi Kahumba",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-07-27",
  },
  {
    designation: "Zero to hero in uejs 3",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.4c3fbf54ffb437c9ccafb1a3b3ea21a9?rik=gLQ8DDLdnG%2bYSw&pid=ImgRaw&r=0",
    lang: "vuejs",
    link: "",
    author: {
      name: "Jean luc",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-05-06",
  },
  {
    designation: "Learn typescript to zero",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.8e0650fb51b34cd4d9f90ce029d475a5?rik=Aiu1gw5iut%2fYxg&pid=ImgRaw&r=0",
    lang: "typescript",
    link: "",
    author: {
      name: "Bin Bag",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/XqGOLSBVBk1215921693803113430IICzPIx1044.png",
    },
    publish_at: "2023-06-22",
  },
  {
    designation: "Zero to hero in uejs 3",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.4c3fbf54ffb437c9ccafb1a3b3ea21a9?rik=gLQ8DDLdnG%2bYSw&pid=ImgRaw&r=0",
    lang: "vuejs",
    link: "",
    author: {
      name: "Jean luc",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/tuBfGWDONL1808201693802682072FQzXQUR7456.png",
    },
    publish_at: "2023-05-06",
  },
  {
    designation: "Learn typescript to zero",
    tag: "dev",
    image_url:
      "https://th.bing.com/th/id/R.8e0650fb51b34cd4d9f90ce029d475a5?rik=Aiu1gw5iut%2fYxg&pid=ImgRaw&r=0",
    lang: "typescript",
    link: "",
    author: {
      name: "Bin Bag",
      avatar:
        "https://upperz-files.s3.af-south-1.amazonaws.com/images/XqGOLSBVBk1215921693803113430IICzPIx1044.png",
    },
    publish_at: "2023-06-22",
  },
];

let _blog_lang = ref();
let _blogs = ref<any[]>([]);
let _filter_designation = ref<string>("Tout");
let _blogs_length = ref<number>(0);

const get_blogs = (_lang?: string) => {
  _filter_designation.value = _lang ? _lang : "Tout";
  _blogs.value = !_lang
    ? _data
    : (collect(_data).where("lang", _lang!) as unknown as any[]);

  return _blogs.value as i.IBlog[];
};

onMounted(() => {
  _blog_lang.value = collect(_data)
    .unique("lang")
    .pluck("lang")
    .unique()
    .all() as i.IBlog[];

  get_blogs();

  _blogs_length.value = _blogs.value.length;
});
</script>

<style lang="scss" scoped>
.p__container {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 5rem;
  position: relative;
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
        font-size: 15px;
        width: 32%;

        .bt__icon {
          font-size: 25px;
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
          border-radius: 0 20px 20px 20px;
        }

        .__top {
          height: 15%;
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
    min-height: 100vh;
    margin-top: 6rem;
    gap: 10px;
    .cb__title {
      font-size: 1.2rem;
      font-weight: 600;
    }
    .cb__left {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .cb__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65vh;
        position: sticky;
        top: 12vh;
        transition: 0.3s;

        .cb__title {
          margin-bottom: 2.5rem;
        }

        .card__label {
          width: 100%;
          min-height: 75%;

          .lang__label {
            display: inline-block;
            font-weight: 600;
            margin-bottom: 15px;
            padding: 8px 15px;
            background-color: #0000001a;
            border-radius: 9px;
            font-size: 14px;
            cursor: pointer;
          }

          .lang__label:hover {
            background-color: black;
            color: #ffffff;
            transition: 0.3s;
            cursor: pointer;
          }
        }

        .cb__proposal {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .proposal__title {
            font-weight: 700;
          }

          .proposal__description {
            font-size: 13px;
          }
          .proposal__bt {
            width: 70%;
            margin-top: 5px;
          }
        }
      }
    }

    .cb__right {
      width: 80%;
      display: flex;
      flex-direction: column;

      .cb__designation {
        color: #e39b55;
        text-transform: capitalize;
      }

      .card__blog {
        width: 100%;
        min-height: auto;
        // height: 700px;
        // background-color: red;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        .__card {
          width: 32%;
          height: 320px;
          margin: 0;
          margin-bottom: 15px;
          background-color: #00000006;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
