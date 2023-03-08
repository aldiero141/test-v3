<template>
  <ACard class="flex flex-col p-2 mb-4">
    <ALoading v-if="isLoading" />
    <div v-if="!isLoading" class="flex flex-row mb-2" v-for="(todo, index) in todos" :key="index">
      <div class="text flex flex-row w-full items-center ml-2">
        <AText>
          {{ todo.text }}
        </AText>
      </div>

      <div class="button flex flex-row items-center">
        <ATodoStatus
          class="mr-2"
          :status="todo.status"
          @on:change="todosStore.setStatus(index, $event)"
        />
        <AButton danger :disabled="!todo.removable" @on:click="todosStore.removeTodo(index)"
          >X
        </AButton>
      </div>
    </div>
  </ACard>
</template>

<script setup lang="ts">
import ALoading from '../Atoms/ALoading.vue'
import AText from '../Atoms/AText.vue'
import AButton from '../Atoms/AButton.vue'
import ACard from '../Atoms/ACard.vue'
import ATodoStatus from '../Atoms/ATodoStatus.vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'
import type { ITask } from '@/models/task'
import { ref, watch } from 'vue'

const todosStore = useTodosStore()
const { filter: filter, isLoading: isLoading } = storeToRefs(todosStore)
let todos = ref<Array<ITask>>(todosStore.todos)
todosStore.getTodos()

watch(filter, (newValue, oldValue) => {
  if (newValue == 'completed') todos.value = todosStore.getCompleted
  if (newValue == 'uncompleted') todos.value = todosStore.getUncompleted
})
</script>
