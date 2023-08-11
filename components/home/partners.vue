<template>
  <div class="parent">
    <div class="section_label">{{ _label }}</div>
    <p class="partner__title">{{ _title }}</p>

    <div class="partner__company">
      <div v-for="(item, i) in companies" :key="i">
        <!-- <ContainerCompany :link="item" class="company__card" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const _title = "Une histoire de confiance";
const _label = "CLIENTS";
</script>
