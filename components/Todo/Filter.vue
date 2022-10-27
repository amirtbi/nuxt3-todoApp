<script setup>
const emits = defineEmits(["emitFilters"]);

const statusFilter = ref(null);

const computedFilterStatus = computed(() => {
  return statusFilter.value;
});
const setFilters = () => {
  emits("emitFilters", computedFilterStatus.value);
};
</script>

<template>
  <div class="d-flex align-center my-4">
    <v-radio-group
      @change="setFilters"
      class="d-flex"
      v-model="statusFilter"
      inline
    >
      <v-radio label="DONE" value="done"></v-radio>
      <v-radio label="iNCOMPLETE" value="notdone"></v-radio>
      <v-radio label="All" value="all"></v-radio>
    </v-radio-group>
  </div>
</template>
