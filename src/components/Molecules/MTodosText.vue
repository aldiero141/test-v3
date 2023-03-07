<template>
  <div>
    <div class="flex flex-row mb-2" v-for="(todo, index) in todos" :key="index">
      <div class="text flex flex-row w-full items-center ml-2">
        <!-- <ALabel class="mr-2" id="number">
          {{ index + 1 }}
        </ALabel> -->
        <AText>
          {{ todo.text }}
        </AText>
      </div>

      <div class="button flex flex-row items-center">
        <!-- <ACheckbox
          class="mr-2"
          :check-value="todo.status"
          @on:change="todosStore.setStatus(index, $event)"
        /> -->
        <ATodoStatus
          class="mr-2"
          :status="todo.status"
          @on:change="todosStore.setStatus(index, $event)"
        />
        <AButton class="" danger :disabled="todo.removable" @on:click="todosStore.removeTodo(index)"
          >X</AButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACheckbox from '../Atoms/ACheckbox.vue'
import AText from '../Atoms/AText.vue'
import AButton from '../Atoms/AButton.vue'
// import ALabel from '../Atoms/ALabel.vue'
import { useTodosStore } from '@/stores/todos'
import ATodoStatus from '../Atoms/ATodoStatus.vue'
// import { storeToRefs } from 'pinia'

interface ITask {
  text: string
  status: string
  removable: boolean
}

// const { loginUser: email, passwordUser: password } = storeToRefs(todosStore)
const todosStore = useTodosStore()
const todos: Array<ITask> = todosStore.todos
</script>
