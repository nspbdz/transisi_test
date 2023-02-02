<template>

  <!-- Modal Post Add -->
  <ModalUserAdd ref="refModalUserAdd"></ModalUserAdd>
  <!-- End Modal Post Add -->

  <v-card>
    <v-tabs v-model="tab" bg-color="primary" fixed-tabs>
      <v-tab value="one">Profile</v-tab>
      <!-- <v-tab value="two">Admin</v-tab> -->
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <div class="d-flex justify-center">
            <v-img style="height: 140px" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
          </div>
          <div class="d-flex justify-center">
            <v-btn @click="handleAddUser" class="my-5" color="success">Add User</v-btn>
          </div>

          <div class="my-5">
            <v-row>
              <v-col md="12" class="text-center">
                <h1>
                  <!-- {{ isUser.name }} -->
                </h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="12" class="text-center">
                <h2>
                  <!-- {{ isUser.email }} -->
                </h2>
              </v-col>
            </v-row>
          </div>
        </v-window-item>

        <!-- <v-window-item value="two">
          <v-btn @click="handleAddUser" block class="my-5" color="success">Add User</v-btn>
          <v-table>

          </v-table>
        </v-window-item> -->
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";

import ModalUserAdd from "@/components/Modal/UserAdd.vue";
import { useAuthStore } from "../../stores/auth";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const route = useRoute();


const tab = ref("");


const refModalUserAdd = ref("");
const handleAddUser = () => {
  refModalUserAdd.value.$refs.refModalAddUser.open();
};

const refModalPostAdd = ref("");
const handleAddPost = () => {
  refModalPostAdd.value.$refs.refModalAdd.open();
};


</script>