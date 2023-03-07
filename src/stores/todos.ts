import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

interface ITask {
  text: string
  status: string
  removable: boolean
}

export const useTodosStore = defineStore('todos', () => {
  const todos: Array<ITask> = reactive([
    {
      text: 'Mandi',
      status: 'completed',
      removable: false
    },
    {
      text: 'Makan',
      status: 'uncompleted',
      removable: false
    },
    {
      text: 'Cuci Baju',
      status: 'uncompleted',
      removable: false
    }
  ])

  const getTodos = computed(() => todos.values)

  function addTodo(todo: ITask) {
    todos.push(todo)
  }
  function removeTodo(index: number) {
    todos.splice(index, 1)
  }

  function setStatus(index: number, value: unknown) {
    if (value) todos[index].status = 'completed'
    if (!value) todos[index].status = 'uncompleted'
    // console.log(this.todos)
  }

  return { todos, getTodos, addTodo, removeTodo, setStatus }
})
