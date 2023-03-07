import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ITask } from '@/models/task'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Array<ITask>>([
    {
      text: 'Mandi',
      status: 'completed',
      removable: true
    },

    {
      text: 'Makan',
      status: 'uncompleted',
      removable: false
    },
    {
      text: 'Bersih Bersih',
      status: 'completed',
      removable: true
    },
    {
      text: 'Cuci Baju',
      status: 'uncompleted',
      removable: false
    }
  ])
  const filter = ref('')

  const getTodos = computed(() => todos.value)
  const getCompleted = computed(() => todos.value.filter((a) => a.status == 'completed'))
  const getUncompleted = computed(() => todos.value.filter((a) => a.status == 'uncompleted'))

  function addTodo(todo: ITask) {
    todos.value.push(todo)
  }
  function removeTodo(index: number) {
    todos.value.splice(index, 1)
  }

  function setStatus(index: number, value: unknown) {
    if (value) {
      todos.value[index].status = 'completed'
      todos.value[index].removable = true
      return
    }
    if (!value) {
      todos.value[index].status = 'uncompleted'
      todos.value[index].removable = false
      return
    }
  }

  function setFilter(value: string) {
    filter.value = value
  }

  return {
    todos,
    filter,
    getTodos,
    getCompleted,
    getUncompleted,
    addTodo,
    removeTodo,
    setStatus,
    setFilter
  }
})
