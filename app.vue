<template>
  <div class="body__children">
    <NuxtLayout name="default" />
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { NuxtPage, NuxtWelcome } from ".nuxt/components";
</script>
<style>
.body__children {
  margin: 0 auto;
  padding: 0;
  max-width: 1450px;
}

@media all and (min-width: 1024px) {
  body {
    padding: 0 4rem;
  }
}
</style>
