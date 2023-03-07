<template>
  <div class="flex flex-col justify-center items-center">
    <ACard class="flex flex-row p-2 mb-4">
      <MTodosInput />
    </ACard>
    <ACard class="flex flex-col p-2 mb-4">
      <MTodosText class="mr-2" />
    </ACard>
    <ACard class="flex flex-row p-2 mb-4">
      <MTodosFIlter />
    </ACard>
  </div>
</template>

<script setup lang="ts">
import ACard from '../Atoms/ACard.vue'
import MTodosInput from '../Molecules/MTodosInput.vue'
import MTodosText from '../Molecules/MTodosText.vue'
import MTodosFIlter from '../Molecules/MTodosFIlter.vue'
</script>
