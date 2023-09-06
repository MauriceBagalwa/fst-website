<template>
  <div class="__home2">
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

  // .background {
  //   position: absolute;
  // }
}
</style>
