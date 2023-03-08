<template>
  <button
    class="flex justify-center items-center rounded px-2 hover:bg-opacity-95 h-[2em] min-w-[2em]"
    :class="{
      'text-white bg-gray-300': disabled,
      'text-white bg-blue-600 ': !disabled && !outlined && !success && !danger,
      'text-white bg-red-600': !disabled && !outlined && danger,
      'text-white bg-green-600': !disabled && !outlined && success,
      'text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-50':
        !disabled && outlined && success,
      'text-red-600 bg-transparent border-2 border-red-600 hover:bg-red-50':
        !disabled && outlined && danger
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
