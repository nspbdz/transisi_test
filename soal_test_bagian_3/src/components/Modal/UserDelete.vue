<template>
  <BaseDialog ref="refModalDeleteUser">
    <section class="login pa-5 mt-5">
      <h1 class="text-center">confirm delete User</h1>
      <br>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <h1 class="text-center">{{ formValues.name }}</h1>

        <!-- <v-text-field v-model="formValues.name" label="Name" required></v-text-field>
        <v-text-field v-model="formValues.job" label="Job" required></v-text-field> -->
        <br>

        <div class="d-flex justify-center">
          <v-btn type="submit" color="error" block>Confirm</v-btn>
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

const refModalDeleteUser = ref("");

const handleSubmit = () => {
  userStore.deleteUser(id.value).then(() => {
    refModalDeleteUser.value.close();

  });

  // userStore.updateUser(id.value, formValues).then(() => {
  //   userStore.fetchUser();
  //   refModalDeleteUser.value.close();
  // });
};
</script>
