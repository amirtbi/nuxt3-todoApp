<script setup>
const emits = defineEmits(["submitEmitter"]);
const title = ref("");
const description = ref("");
const statusOfTodo = ref("");
const submitForm = () => {
  const enteredValues = {
    title: title.value,
    description: description.value,
    done: statusOfTodo.value,
  };
  emits("submitEmitter", enteredValues);
};
</script>
<template>
  <v-card class="pa-4" min-height="100%">
    <v-card-title>Task Registration</v-card-title>

    <v-form width="50%" @submit.prevent="submitForm" ref="form">
      <v-text-field label="title" v-model="title"></v-text-field>

      <v-text-field
        v-model="description"
        label="Description"
        required
      ></v-text-field>
      <div>
        <v-radio-group v-model="statusOfTodo">
          <v-radio label="done" value="done"></v-radio>
          <v-radio label="incompelete" value="notdone"></v-radio>
        </v-radio-group>
      </div>
      <v-btn type="submit" color="success" class="mr-4"> Add </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-card>
</template>
