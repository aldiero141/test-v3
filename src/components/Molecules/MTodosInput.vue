<template>
  <div class="flex flex-row w-full">
    <ALabel>
      {{ text }}
    </ALabel>
    <AInput class="mr-2" v-model="todo" :placeholder="placeholder" />
    <AButton class="mr-2" @on:click="addTask"> Add </AButton>
  </div>
</template>

<script setup lang="ts">
import AInput from '../Atoms/AInput.vue'
import ALabel from '../Atoms/ALabel.vue'
import AButton from '../Atoms/AButton.vue'
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

defineProps({
  text: { type: String, default: '' },
  placeholder: { type: String, default: '' }
})

const todo = ref('')
interface ITask {
  text: string
  status: string
  removable: boolean
}
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
