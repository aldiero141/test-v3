<template>
  <button
    class="flex justify-center items-center button text-white rounded px-2 hover:bg-opacity-95 h-[2em] min-w-[2em]"
    :class="{
      'bg-red-500': danger,
      'bg-blue-500': !danger
    }"
    :disabled="disabled"
    @click="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  danger: Boolean,
  disabled: Boolean
})

defineEmits(['on:click'])
</script>
