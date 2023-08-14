<template>
  <div class="section_container section__padding">
    <p class="container__title">{{ _title }}</p>
    <div class="container__cards">
      <div v-for="item in _data">
        <CardsRealisation :data="item" />
      </div>
    </div>

    <button>
      Voir tous nos projets <Icon name="uil:arrow-up-right" class="bt__icon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import i from "interface";

const { data } = defineProps<{ data: { show_title: boolean } }>();
const _title = "Nos realisations";
const _data: i.IRealisationCard[] = [
  {
    title: "shule system",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae a ducimus soluta id provident aliquid nisi eaque numquam quae!",
    genres: ["Education", "web"],
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/624c5e49167a57162898fbbf_image_thumbnail_application_mobile_we_are_caring.png",
    bg_color: "#2b279eb2",
  },
  {
    title: "Maajabu Cab",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae a ducimus soluta id provident aliquid nisi eaque numquam quae!",
    genres: ["Transport", "Mobile", "Web"],
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/624c5d9f40ffde160d61681f_image_thumbnail_application_mobile_monsuividiet-p-800.png",
    bg_color: "#e09a3d8e",
  },
  {
    title: "Maajabu Cab",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae a ducimus soluta id provident aliquid nisi eaque numquam quae!",
    genres: ["UX/UI", "Web", "Android", "ios"],
    image_ul:
      "https://uploads-ssl.webflow.com/62286107f2783186ccd3f75b/62614b70f4efecdf9b75f22f_image_thumbnail_application_mobile_activitylab-p-800.png",
    bg_color: "#2fcfb2",
  },
];

</script>

<style lang="scss" scoped>
.section_container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;

  .container__title {
    font-size: 26px;
    font-weight: 800;
    padding: 0 2px;
  }

  .container__cards {
    width: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    color: #fff;
    gap: 2rem;
  }

  button {
    color: #000;
    text-transform: none;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #8c868175;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.75rem;

    .bt__icon{
      font-size: 19px;
    }
  }
}
</style>
