<template>
  <div class="flex flex-col">
    <ALabel class="mr-2 mb-2">Filter</ALabel>
    <div class="flex flex-row items-center justify-end">
      <button
        class="border-2 border-green-600 text-green-600 hover:bg-green-100 rounded h-[2em] w-[7em] mr-2"
      >
        Completed
      </button>
      <button class="border-2 border-red-600 text-red-600 hover:bg-red-100 rounded h-[2em] w-[7em]">
        Uncompleted
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALabel from '../Atoms/ALabel.vue'
</script>
