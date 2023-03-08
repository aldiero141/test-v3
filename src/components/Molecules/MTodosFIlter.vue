<template>
  <ACard class="flex flex-col p-2 mb-4">
    <ALabel class="mr-2 mb-2">Filter</ALabel>
    <div class="flex flex-row items-center">
      <AButton success outlined class="mr-2" @on:click="setCompleted"> Completed </AButton>
      <AButton danger outlined class="mr-2" @on:click="setUncompleted"> Uncompleted </AButton>
    </div>
  </ACard>
</template>

<script setup lang="ts">
import ALabel from '../Atoms/ALabel.vue'
import AButton from '../Atoms/AButton.vue'
import ACard from '../Atoms/ACard.vue'

import { useTodosStore } from '@/stores/todos'
const todosStore = useTodosStore()

function setCompleted(): void {
  todosStore.setFilter('completed')
}
function setUncompleted(): void {
  todosStore.setFilter('uncompleted')
}
</script>
