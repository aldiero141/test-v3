<template>
  <div class="w-full h-8">
    <input
      class="w-full h-full p-2"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputModel"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

function inputModel(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
