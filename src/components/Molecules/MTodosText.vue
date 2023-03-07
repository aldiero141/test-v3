<template>
  <ACard class="flex flex-col p-2 mb-4">
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
        <AButton danger :disabled="!todo.removable" @on:click="todosStore.removeTodo(index)"
          >X
        </AButton>
      </div>
    </div>
  </ACard>
</template>

<script setup lang="ts">
import AText from '../Atoms/AText.vue'
import AButton from '../Atoms/AButton.vue'
import ACard from '../Atoms/ACard.vue'
import ATodoStatus from '../Atoms/ATodoStatus.vue'
// import ACheckbox from '../Atoms/ACheckbox.vue'
// import ALabel from '../Atoms/ALabel.vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'
import type { ITask } from '@/models/task'
import { ref, watch } from 'vue'

// const { loginUser: email, passwordUser: password } = storeToRefs(todosStore)
const todosStore = useTodosStore()
const { filter: filter } = storeToRefs(todosStore)

let todos = ref<Array<ITask>>(todosStore.todos)

watch(filter, (newValue, oldValue) => {
  if (newValue == 'completed') todos.value = todosStore.getCompleted
  if (newValue == 'uncompleted') todos.value = todosStore.getUncompleted
  if (newValue == '') todos.value = todosStore.todos
})
</script>
