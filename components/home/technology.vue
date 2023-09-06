<template>
  <div class="section_container section__padding">
    <p class="container__title">{{ _title }}</p>
    <p class="container__description">{{ _description }}</p>

    <div class="container__type">
      <!-- <button class="card__type" @click="filter_data()">#Tous</button> -->
      <div v-for="str in _type_tag">
        <button class="card__type" @click="filter_data(str)">#{{ str }}</button>
      </div>
    </div>
    <div class="container__display">
      <div v-for="str in _type">
        <div class="display__card">
          <img src="/images/_adonis.png" alt="logo" />
          <p>{{ str.designation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import collect from "collect.js";
import i from "interface";
const _description =
  "Merci à l’équipe Apparence ! Le travail réalisé sur la maquette de notre application mobile s’est déroulé selon nos attentes, et avec un bon niveau d’accomplissement.";

const _label = "Techno";
const _title = "Outils & Technologie utiliser ";

const _data = [
  {
    designation: "Vuejs",
    tag: "frontend",
    image_url: "",
  },
  {
    designation: "Nuxtjs",
    tag: "frontend",
    image_url: "",
  },
  {
    designation: "Quickjs",
    tag: "frontend",
    image_url: "",
  },
  {
    designation: "Reactjs",
    tag: "frontend",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    designation: "Nextjs",
    tag: "frontend",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    designation: "Laravel",
    tag: "backend",
    image_url:
      "https://www.bing.com/images/search?view=detailV2&ccid=XNPtDqM6&id=F3CA663815E268C570832B857A4E9AD30417E6BE&thid=OIP.XNPtDqM6jQzmUVQre6IxMQHaE8&mediaurl=https%3a%2f%2fpluspng.com%2fimg-png%2flaravel-logo-png-img-free-png-php-logo-png-img-800-600-free-900x600.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5cd3ed0ea33a8d0ce651542b7ba23131%3frik%3dvuYXBNOaTnqFKw%26pid%3dImgRaw%26r%3d0&exph=600&expw=900&q=laravel+logo&simid=608026284274566712&FORM=IRPRST&ck=FB4A9A3C26254BF9E88BCBE6CAA82A2C&selectedIndex=7",
  },
  {
    designation: "AdonisJs",
    tag: "backend",
    image_url:
      "https://www.bing.com/images/search?view=detailV2&ccid=Y%2fU3mw%2f%2b&id=557889432CFFE56AD4088A5DCF205394B25AB019&thid=OIP.Y_U3mw_-Q-uzHEafaz5XDAAAAA&mediaurl=https%3a%2f%2favatars3.githubusercontent.com%2fu%2f13810373%3fs%3d280%26v%3d4&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.63f5379b0ffe43ebb31c469f6b3e570c%3frik%3dGbBaspRTIM9dig%26pid%3dImgRaw%26r%3d0&exph=280&expw=280&q=adonisjs+&simid=608046861467023026&FORM=IRPRST&ck=68764FAAEB85BFB623C0016B21B1A680&selectedIndex=0",
  },
  {
    designation: "Nodejs",
    tag: "backend",
    image_url:
      "https://nodejs.dev/static/images/brand/logos-js-bottom/dark.svg",
  },
  {
    designation: "Js",
    tag: "language",
    image_url:
      "https://www.bing.com/images/search?view=detailV2&ccid=CL8vSTH2&id=452ADE4A31C94344EDC2D773DD9C9DCD8453A13E&thid=OIP.CL8vSTH29LrPSuXyJEIdEgHaHu&mediaurl=https%3a%2f%2fw1.pngwing.com%2fpngs%2f951%2f574%2fpng-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.08bf2f4931f6f4bacf4ae5f224421d12%3frik%3dPqFThM2dnN1z1w%26pid%3dImgRaw%26r%3d0&exph=960&expw=920&q=javascript+png&simid=607994789291053735&FORM=IRPRST&ck=A780A8848AD42D41347D4ED2049635A2&selectedIndex=72",
  },
  {
    designation: "TypeScript",
    tag: "language",
    image_url: "",
  },
  {
    designation: "Cairo",
    tag: "web3",
    image_url: "",
  },
  {
    designation: "Starknet",
    tag: "web3",
    image_url: "",
  },
  {
    designation: "MongoDb",
    tag: "Data base",
    image_url: "",
  },
  {
    designation: "Postgres",
    tag: "Data base",
    image_url: "",
  },
  {
    designation: "Mysql",
    tag: "Data base",
    image_url: "",
  },
  {
    designation: "Starknet",
    tag: "Design",
    image_url: "",
  },
  {
    designation: "Docker",
    tag: "Devops",
    image_url: "",
  },
  {
    designation: "Kubrenet",
    tag: "Devops",
    image_url: "",
  },
  {
    designation: "SonarCube",
    tag: "Devops",
    image_url: "",
  },
  {
    designation: "Jenkins",
    tag: "Devops",
    image_url: "",
  },
  {
    designation: "Starknet",
    tag: "Autres",
    image_url: "",
  },
  {
    designation: "Flutter",
    tag: "Mobile",
    image_url: "",
  },
  {
    designation: "Android",
    tag: "Mobile",
    image_url: "",
  },
];

let _type_tag = ref();
let _type = ref();

const filter_data = (tag?: string) => {
  _type.value = !tag ? _data : collect(_data).where("tag", tag!);
  return _type.value as i.ITechnoCard[];
};

onMounted(() => {
  _type_tag.value = collect(_data).pluck("tag").unique().all();
  filter_data(_type_tag.value[0]);
});
</script>

<style lang="scss" scoped>
.section_container {
  // background-color: red;
  min-height: 58vh;
  position: relative;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  .container__title {
    font-size: 25px;
    font-weight: 800;
    padding: 0 2px;
  }

  .container__type {
    position: relative;
    background-color: transparent;
    width: 100%;
    min-height: 40px;
    padding: 0 0.2rem;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    .card__type {
      padding: 10px 20px;
      z-index: 10;
      border-radius: 4px;
      background-color: #0000000f;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      border: none;
      cursor: pointer;
    }
  }

  .container__type::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 60%;
    height: 1.5px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.258);
    transform: translateY(25px);
  }
  .container__display {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    position: relative;
    margin-top: 2rem;
    .display__card {
      width: 160px;
      height: 150px;
      background: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.056);
      border-radius: 10px;
      gap: 10px;
      img {
        height: 100%;
        padding: 1%;
        height: 50%;
        object-fit: contain;
      }

      p {
        font-weight: 600;
      }
    }
  }
}

@media all and (min-width: 1024px) {
  .section_container {
    // margin-top: 12%;

    .container__title {
      font-weight: 800;
      font-size: 30px;
    }
    .container__description {
      font-size: 1.25rem;
      color: #737b7d;
      line-height: 2rem;
      inline-size: 65%;
    }
  }

  .section_container::before {
    content: "# T E C H N O  &  O U T I L S";
    position: absolute;
    font-size: 11px;
    margin-top: -75px;
    // left:44%;
    background: #e39b55;

    border-radius: 3px;
    padding: 8px 20px;
    color: #ffffff;
    opacity: 0.9;
    font-weight: 800;
  }
}
</style>
