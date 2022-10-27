<script setup>
const menueItems = ref([
  { title: "Home", link: "/" },
  { title: "App", link: "/app" },
]);
</script>

<template>
  <div class="d-flex">
    <v-list v-for="(item, index) in menueItems" :key="index">
      <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
    </v-list>
  </div>
</template>
