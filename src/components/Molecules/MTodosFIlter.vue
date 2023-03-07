<template>
  <div class="flex flex-col">
    <ALabel class="mr-2 mb-2">Filter</ALabel>
    <div class="flex flex-row items-center justify-end">
      <AButton success outlined class="mr-2"> Completed </AButton>
      <AButton danger outlined> Uncompleted </AButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALabel from '../Atoms/ALabel.vue'
import AButton from '../Atoms/AButton.vue'
</script>
