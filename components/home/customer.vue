<template>
  <div class="section_container">
    <p class="container__label">{{ _label }}</p>
    <p class="container__title">{{ _title }}</p>

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
const _label = "Clients";
const _title = "Une histoire de confiance";

const _data: string[] = [
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-1.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-2.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-3.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-4.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-5.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-2.svg",
  "https://themes.3rdwavemedia.com/nova-pro/bs4/assets/images/logos/logo-3.svg",
];
</script>

<style lang="scss" scoped>
.section_container {
  min-height: 30vh;
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  img {
    width: 330px;
    height: 300px;
    object-fit: cover;
  }
  .container__title {
    font-size: 25px;
    font-weight: 800;
    padding: 0 2px;
  }
  .container__descrption {
    color: rgb(66, 66, 66);
    letter-spacing: 1px;
    line-height: 25px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    cursor: pointer;
    margin-right: 30px;
    .card {
      img {
        width: 100px;
        height: 70px;
        object-fit: contain;
      }
    }
  }
}
</style>
