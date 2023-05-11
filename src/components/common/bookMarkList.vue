<template>
  <div class="flex">
    <div class="pl-2 pt-1 ml-1">
      <button
        @click="grid = true"
        class="bg-gray text-black-200 p-1 m-1 relative top-0 h-12 rounded-md hover:bg-slate-200"
        :class="{ 'bg-primary-svg': grid }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
      <button
        @click="grid = false"
        class="bg-gray text-black-200 p-1 m-1 relative top-0 h-12 rounded-md hover:bg-slate-200"
        :class="{ 'bg-primary-svg': !grid }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
  <span
    class="p-2 ml-4 text-sm bg-slate-200 rounded-2xl text-gray-500"
    v-if="props.items.length === 1"
    >{{ props.items[0].category.name }}</span
  >
  <div
    v-show="grid"
    class="p-4 grid grid-cols-1 gap-4 w-3/4 md:grid-cols-2 lg:grid-cols-4"
    style="grid-auto-rows: 175px"
  >
    <bookMarkItem v-for="item in props.items" :key="item.id" :item="item" />
  </div>
  <div
    v-show="!grid"
    class="p-4 grid grid-cols-1 gap-4 w-1/3"
    style="grid-auto-rows: 175px"
  >
    <bookMarkItem v-for="item in props.items" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import bookMarkItem from "./bookMarkItem.vue";

import { defineProps, ref } from "vue";
const grid = ref(true);
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
