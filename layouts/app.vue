<script setup></script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>ToDoList App</v-app-bar-title>
      <NavsItems />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<style scoped>
header {
  background-color: pink;
}
main {
  min-height: 100%;
}
main section {
  height: 100%;
}
</style>
