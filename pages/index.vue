<template>
  <div class="__home2">
    <!-- <img src="/images/bg-6.png" class="background" /> -->
    <HomeHero />
    <HomeAbout />
    <HomeExpertise />
    <HomeRealisation :data="{ show_title: true }" />
    <HomeWhyUs />
    <HomeCustomer />
    <!-- <HomeComment /> -->

    <HomeTechnology />
    <CardsContact />
  </div>
</template>

<style lang="scss">
.__home2 {
  position: relative;
  background-image: url("/images/bg-6.png");
  // background-color: red;
  height: 100%;
  // width: 40%;

  .background {
    position: absolute;
    // width: 100%;
    // height: 75%;
    // left: 0;
    // right: 0;
    // top: -106px;
    // z-index: 50;
    // opacity: 0.15;
  }
}
</style>
