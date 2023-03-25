<script setup>
import MainAside from "../components/home/MainAside.vue";
</script>

<template>
  <body class="bg-gray-100">
    <appHeader />
    <div class="flex flex-row">
      <MainAside />
      <!-- deneme -->
      <bookMark/>
    </div>
  </body>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
} */
/* .logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
