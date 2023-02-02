

<template>
  <ModalUserUpdate ref="refModalUserUpdate"></ModalUserUpdate>

  <div class="detail">
    <v-img class="align-end text-white" height="500" :src="getDetailUser.avatar" cover>
    </v-img>
    <br />
    <h1>{{ getDetailUser.first_name + " " + getDetailUser.last_name }}</h1>
    <div>
      <p>
        {{ getDetailUser.email }}
      </p>
      <v-btn @click="handleUpdateUser" class="my-5" color="success">Update User</v-btn>

    </div>

  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
// import { useCommentStore } from "@/stores/comment";
import { useRoute } from "vue-router";
import ModalUserAdd from "@/components/Modal/UserAdd.vue";
import ModalUserUpdate from "@/components/Modal/UserUpdate.vue";

const userStore = useUserStore();
// const commentStore = useCommentStore();
const route = useRoute();

const getDetailUser = computed(() => userStore.getDetailUser);

const formValues = reactive({
  nama: "",
  email: "",
  comment: "",
});

const refModalUserUpdate = ref("");
const handleUpdateUser = () => {
  refModalUserUpdate.value.$refs.refModalUpdateUser.open();
};

onMounted(() => {
  userStore.fetchDetailUser(route.params.id);
});
</script>