<script setup lang="ts">
interface ILinks {
  title: string;
  link: string;
}
const menueItems = ref<ILinks[]>([
  { title: "Home", link: "/" },
  { title: "App", link: "/app" },
]);
</script>

<template>
  <div class="d-flex px-5">
    <v-list class="mx-4" v-for="(item, index) in menueItems" :key="index">
      <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
    </v-list>
  </div>
</template>
