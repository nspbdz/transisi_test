<template>
  <BaseDialog ref="refModalUpdateUser">
    <section class="login pa-5 mt-5">
      <h1 class="text-center">Edit User</h1>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-text-field v-model="formValues.name" label="Name" required></v-text-field>
        <v-text-field v-model="formValues.job" label="Job" required></v-text-field>
        <div class="d-flex justify-center">
          <v-btn type="submit" color="primary" block>Edit</v-btn>
        </div>
      </v-form>
    </section>
  </BaseDialog>
</template>
<script setup>
import BaseDialog from "@/components/Base/Dialog.vue";
import { reactive, ref, computed, watch } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const formValues = reactive({
  name: "",
  job: "",
});

const getDetailUser = computed(() => userStore.getDetailUser);

const id = ref("");

watch(getDetailUser, (val) => {
  console.log(val, 'user val')
  id.value = val.id;
  formValues.name = val.first_name;
  formValues.job = val.job;
  console.log(formValues, 'formValues val')

});

const refModalUpdateUser = ref("");

const handleSubmit = () => {
  userStore.updateUser(id.value, formValues).then(() => {
    userStore.fetchUser();
    refModalUpdateUser.value.close();
  });
};
</script>
