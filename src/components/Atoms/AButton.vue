<template>
  <button
    class="flex justify-center items-center button text-white rounded px-2 hover:bg-opacity-95 h-[2em] min-w-[2em]"
    :class="{
      'bg-blue-600': !success && !danger,
      'bg-red-600': danger,
      'bg-green-600': success,
      'text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-50':
        outlined && success,
      'text-red-600 bg-transparent border-2 border-red-600 hover:bg-red-50': outlined && danger
    }"
    :disabled="disabled"
    @click="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  success: Boolean,
  outlined: Boolean,
  danger: Boolean,
  disabled: Boolean
})

defineEmits(['on:click'])
</script>
