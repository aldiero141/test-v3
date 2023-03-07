<template>
  <div class="flex flex-col justify-center items-center">
    <MTodosInput />
    <MTodosText class="mr-2" />
    <MTodosFIlter />
  </div>
</template>

<script setup lang="ts">
import ACard from '../Atoms/ACard.vue'
import MTodosInput from '../Molecules/MTodosInput.vue'
import MTodosText from '../Molecules/MTodosText.vue'
import MTodosFIlter from '../Molecules/MTodosFIlter.vue'
</script>
