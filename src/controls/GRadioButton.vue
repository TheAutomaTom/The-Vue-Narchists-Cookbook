<template>
  <input
    type="radio"
    :value="value"
    :id="id"
    @change="$emit('update:modelValue', value)"
  />
  <label :for="value">{{ label }}</label>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps({ label: String, id: String });
let modelValue: [String, Number];
let value: string, number;
onMounted(() => {
  console.dir(value);
  console.dir(modelValue);
});
</script>
