<template>
  <button
    class="flex justify-center items-center rounded bg-white w-[8em] h-[2em]"
    :class="{
      'bg-red-600': status == 'uncompleted',
      'bg-green-600': status == 'completed'
    }"
    @click="checked"
  >
    <p class="text-white capitalize">
      {{ status }}
    </p>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['on:change'])
const props = defineProps({
  status: { type: String, default: '' }
})

function checked(): void {
  if (props.status == 'completed') emit('on:change', false)
  if (props.status == 'uncompleted') emit('on:change', true)
}
</script>
