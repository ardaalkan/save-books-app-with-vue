<template>
  <body class="bg-gray-100">
    <appHeader />
    <div class="flex">
      <MainAside @category-changed="updateBookmarkList" />
      <!-- deneme -->
      <div class="w-full">
        <bookMarkList v-if="bookmarkLists.length > 0" :items="bookmarkLists" />
        <div class="p-6" v-else>Bookmark items doesnt exists.</div>
      </div>
    </div>
  </body>
</template>

<script setup>
import MainAside from "../components/home/MainAside.vue";
import { axiosInstance } from "../utils/axiosInstance";
import bookMarkList from "../components/common/bookMarkList.vue";
import { ref } from "vue";

const bookmarkLists = ref([]);

const fetchData = () => {
  axiosInstance
    .get(`/bookmarks?_expand=category&_expand=user`)
    .then((response) => {
      bookmarkLists.value = response?.data || [];
      console.log(response);
    });
};

const updateBookmarkList = (categoryId) => {
  const url = categoryId
    ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
    : `/bookmarks?_expand=category&_expand=user`;
  axiosInstance.get(url).then((response) => {
    console.log(response);
    bookmarkLists.value = response?.data || [];
  });
};

fetchData();
</script>
