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
        <slot name="main"></slot>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script setup></script>
