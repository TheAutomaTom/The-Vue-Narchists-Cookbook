<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="emits('update:modelValue', 
        ($event.target as HTMLInputElement).value);"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: "" },
  modelValue: { type: Boolean, default: false },
});
const emits = defineEmits(["update:modelValue"]);
</script>
