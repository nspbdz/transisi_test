<template>

  <ModalUserDelete ref="refModalUserDelete"></ModalUserDelete>
  <v-row>
    <v-col v-for="items in getUser" :key="items.id" cols="4">
      <v-card @click="handleDetail(items.id)" class="mx-auto" max-width="400">
        <v-img class="align-end text-white" height="200" :src="items.avatar" cover>
          <v-card-title>{{ items.first_name + " " + items.last_name }}</v-card-title>
        </v-img>

        <v-card-text>
          <div>{{ items.email }}</div>
        </v-card-text>
      </v-card>
      <v-btn @click="handleDeleteUser(items.id)" block class="my-5" color="success">Delete</v-btn>

    </v-col>
  </v-row>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import ModalUserDelete from "@/components/Modal/UserDelete.vue";

const UserStore = useUserStore();
const router = useRouter();

const handleDetail = (id) => {
  console.log(id, "kepencet");
  router.push(`/detail/${id}`);
};

const refModalUserDelete = ref("");
const handleDeleteUser = (id) => {
  // console.log(id, "idnya")
  UserStore.fetchDetailUser(id);
  refModalUserDelete.value.$refs.refModalDeleteUser.open();

  // UserStore.deleteUser(id).then(() => {

  // });
}
const getUser = computed(() => UserStore.getUser);

onMounted(() => {
  UserStore.fetchUser();
});
</script>