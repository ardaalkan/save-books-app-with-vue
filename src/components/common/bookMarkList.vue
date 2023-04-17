<template>
  <div
    class="p-4 grid grid-cols-1 gap-4 w-3/4 md:grid-cols-2 lg:grid-cols-4"
    style="grid-auto-rows: 175px"
  >
    <bookMarkItem v-for="item in props.items" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import bookMarkItem from "./bookMarkItem.vue";
import { defineProps } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
