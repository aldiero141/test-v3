<template>
  <ACard class="flex flex-row p-2 mb-4">
    <ALabel>
      {{ text }}
    </ALabel>
    <AInput class="mr-2" v-model="todo" :placeholder="placeholder" />
    <AButton class="mr-2" @on:click="addTask"> Add </AButton>
  </ACard>
</template>

<script setup lang="ts">
import AInput from '../Atoms/AInput.vue'
import ALabel from '../Atoms/ALabel.vue'
import AButton from '../Atoms/AButton.vue'
import ACard from '../Atoms/ACard.vue'
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'
import type { ITask } from '@/models/task'

defineProps({
  text: { type: String, default: '' },
  placeholder: { type: String, default: '' }
})

const todo = ref('')
const todosStore = useTodosStore()
function addTask(): void {
  const task: ITask = {
    text: todo.value,
    status: 'uncompleted',
    removable: false
  }
  todosStore.addTodo(task)
}
</script>
