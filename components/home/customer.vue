<template>
  <div class="section_container">
    <div class="container__top">
      <p class="container__title">{{ _title }}</p>
      <p class="container__description">{{ _description }}</p>
    </div>
    <div class="cards">
      <div v-for="link in _data">
        <div class="card">
          <img :src="link" alt="company" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae a ducimus soluta id provident aliquid nisi eaque numquam quae!";
const _title = "Une histoire de confiance";

const _data: string[] = [
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-1.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-2.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-3.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-4.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-5.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-2.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-3.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-4.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-5.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-2.svg",
  

];
</script>

<style lang="scss" scoped>
.section_container {
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 1rem;
  // align-items: center;
  // text-align: center;
  // img {
  //   width: 330px;
  //   height: 300px;
  //   object-fit: cover;
  // }
  .container__title {
    //   // width: 100%;
    //   background-color: blue;
    // font-size: 25px;
    // font-weight: 800;

    //   font-size: 30px;
    //   inline-size: 75%;
    //   // text-align: center;
  }
  // .container__descrption {
  //   color: rgb(66, 66, 66);
  //   letter-spacing: 1px;
  //   line-height: 25px;
  // }
  // .cards {
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 1.5rem;
  //   cursor: pointer;
  //   margin-right: 30px;
  //   .card {
  //     img {
  //       width: 100px;
  //       height: 70px;
  //       object-fit: contain;
  //     }
  //   }
  // }
}

@media all and (min-width: 1024px) {
  .section_container {
    margin: 0;
    padding: 0;
    gap: 2rem;
    margin-bottom: 5rem;

    .container__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
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

    .cards {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      cursor: pointer;
      padding: 0 2rem;

      .card {
        width: 180px;
        padding: 0.7rem 0;
        border-radius: 8px;
        background-color: #00000006;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100px;
          height: 70px;
        }
      }
    }
  }

  .section_container::before {
    content: "# C L I E N T S";
    position: absolute;
    font-size: 11px;
    margin-top: -75px;
    background: #e39b55;

    border-radius: 3px;
    padding: 8px 20px;
    color: #ffffff;
    opacity: 0.9;
    font-weight: 800;
  }
}
</style>
