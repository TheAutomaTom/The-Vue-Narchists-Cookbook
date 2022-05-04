<template>
  <div class="flex my-2">
    <label v-if="label" :class="labelClass">{{ label }}</label>
    <input
      :type="inputType"
      v-bind="$attrs"
      :placeholder="label"
      :value="modelValue"
      :class="inputClass"
      @input="emits('update:modelValue', 
        ($event.target as HTMLInputElement).value);"
    />
    <!-- //@input="$emit('update:modelValue', $event.target.value)" -->
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  label: String,
  inputType: String,
  labelClass: String,
  inputClass: String,
  modelValue: [Number, String],
});
const emits = defineEmits(["update:modelValue"]);

// Example in script:
// const handleInput = (e: Event) => {
//   emits("update:modelValue", (e.target as HTMLInputElement).value);
// };
</script>
