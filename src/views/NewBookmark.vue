<template>
  <div class="new-bookmark-container">
    <h3 class="text-xl text-center mb-6 mt-6 text-slate-600">
      Add new bookmark
    </h3>
    <input
      autofocus
      ref="title"
      v-model="userData.title"
      type="text"
      placeholder="Başlık"
      class="input mb-3 input-hover"
    />
    <input
      v-model="userData.url"
      type="text"
      placeholder="URL"
      class="input mb-3 input-hover"
    />
    <select v-model="userData.categoryId" class="input mb-3 input-hover">
      <option disabled value="" selected>Category</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <textarea
      v-model="userData.description"
      placeholder="Açiklama"
      class="input mb-3"
      cols="30"
      rows="10"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1 mt-1 mb-5 m-auto">
      <button
        @click="$router.push({ name: 'HomePage' })"
        class="secondary-button"
      >
        İptal
      </button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { axiosInstance } from "../utils/axiosInstance";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const categoryList = ref([]);
const userData = ref({
  title: null,
  url: null,
  categoryId: null,
  description: null,
});

onMounted(() => {
  axiosInstance.get("/categories").then((response) => {
    categoryList.value = response?.data || [];
    console.log("response", response);
  });
});

const onSave = () => {
  console.log("userData", userData);
  // axiosInstance.post("/bookmarks", {});
  const saveData = {
    ...userData.value,
    userId: _getCurrentUser?.value.id,
    created_at: new Date(),
  };
  axiosInstance.post("/bookmarks", saveData).then((response) => {
    console.log("response", response);
    Object.keys(userData.value)?.forEach(
      (field) => (userData.value[field] = null)
    );
    router.push({ name: "HomePage" });
  });
};
const _getCurrentUser = computed(() => store.getters._getCurrentUser);
</script>
