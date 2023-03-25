<template>
  <div
    class="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    style="grid-auto-rows: 175px"
  >
    <bookMarkItem v-for="i in 3" :key="i" />
  </div>
</template>

<script setup>
import bookMarkItem from "./bookMarkItem.vue";
</script>
