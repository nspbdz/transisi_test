import { ref, computed } from "vue";
import { defineStore } from "pinia";
import SERVICE from "@/service/user.js";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  const detailUser = ref({});

  const getUser = computed(() => user.value);
  const getDetailUser = computed(() => detailUser.value);

  const setUser = (data) => {
    user.value = data;
  };

  const setDetailUser = (data) => {
    detailUser.value = data;
  };

  async function fetchUser() {
    try {
      const res = await SERVICE.getUser();

      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchDetailUser(id) {
    try {
      const res = await SERVICE.detailUser({
        id,
      });
      console.log(res, "res user by id");

      setDetailUser(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser(payload) {
    try {
      const res = await SERVICE.createUser({
        payload,
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUser(id, payload) {
    try {
      const res = await SERVICE.updateUser({
        id,
        payload,
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {
    try {
      const res = await SERVICE.deleteUser({
        id,
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getUser,
    getDetailUser,
    fetchUser,
    fetchDetailUser,
    createUser,
    deleteUser,
    updateUser,
  };
});
