<template>
  <BaseDialog ref="refModalAddUser">
    <section class="login pa-5 mt-5">
      <h1 class="text-center">Add User</h1>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-text-field v-model="formValues.name" label="Name" required></v-text-field>
        <v-text-field v-model="formValues.job" label="Job" required></v-text-field>

        <div class="d-flex justify-center">
          <v-btn type="submit" color="primary" block>Add</v-btn>
        </div>
      </v-form>
    </section>
  </BaseDialog>
</template>
<script setup>
import BaseDialog from "@/components/Base/Dialog.vue";
import { reactive, ref } from "@vue/reactivity";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const formValues = reactive({
  name: "",
  job: "",
});

const refModalAddUser = ref("");

const handleSubmit = () => {
  userStore.createUser(formValues).then((response) => {
    userStore.fetchUser();
    refModalAddUser.value.close();

  });
};
</script>