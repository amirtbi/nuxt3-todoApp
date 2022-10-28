<script setup lang="ts">
definePageMeta({
  layout: false,
});
const loading = ref<Boolean>(false);
</script>

<template>
  <NuxtLayout name="app">
    <template #default>
      <TodoManager v-slot="{ Add, todoList, filterToDo }">
        <section>
          <TodoCardForm @submitEmitter="Add"></TodoCardForm>
        </section>
        <section class="mt-10">
          <v-card max-width="50%" min-height="200px">
            <v-card-title
              >ToDo list <small v-if="loading">Loading...</small>
            </v-card-title>

            <v-list>
              <TodoFilter @emitFilters="filterToDo"></TodoFilter>
              <v-list-item-group>
                <v-list-item
                  class="d-flex justify-space-between"
                  v-for="(item, i) in todoList"
                  :key="i"
                >
                  <v-list-item-content
                    class="full-width d-flex justify-space-between"
                  >
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                  <v-chip
                    label
                    small
                    :color="item.done === 'done' ? 'success' : 'error'"
                    >{{ item.done }}</v-chip
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </section>
      </TodoManager>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.full-width {
  width: 100%;
}
</style>
