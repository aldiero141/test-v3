import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ITask } from '@/models/task'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Array<ITask>>([])
  const filter = ref('')
  const isLoading = ref(false)

  const getCompleted = computed(() =>
    todos.value.sort(function (a, b) {
      if (a.status < b.status) {
        return -1
      }
      if (a.status > b.status) {
        return 1
      }
      return 0
    })
  )
  const getUncompleted = computed(() =>
    todos.value.sort(function (a, b) {
      if (a.status > b.status) {
        return -1
      }
      if (a.status < b.status) {
        return 1
      }
      return 0
    })
  )

  async function getTodos() {
    return await new Promise((resolve, reject) => {
      isLoading.value = true
      setTimeout(() => {
        todos.value.push(
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
        )
        resolve('init todos!')
        isLoading.value = false
      }, 1000)
    })
  }

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
    isLoading,
    getTodos,
    getCompleted,
    getUncompleted,
    addTodo,
    removeTodo,
    setStatus,
    setFilter
  }
})
