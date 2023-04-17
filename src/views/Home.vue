<template>
  <body class="bg-gray-100">
    <appHeader />
    <div class="flex flex-row">
      <MainAside @category-changed="updateBookmarkList" />
      <!-- deneme -->
      <bookMarkList :items="bookmarkLists" />
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
  const url = `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`;
  axiosInstance.get(url).then((response) => {
    console.log(response);
    bookmarkLists.value = response?.data || [];
  });
};
fetchData();
</script>
