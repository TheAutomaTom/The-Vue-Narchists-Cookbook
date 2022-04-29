<template>
  <div class="flex">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      class="grow"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      @input="emits('update:modelValue', 
        ($event.target as HTMLInputElement).value);"
    />
    <!-- //@input="$emit('update:modelValue', $event.target.value)" -->
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  label: String,
  type: String,
  modelValue: [Number, String],
});
const emits = defineEmits(["update:modelValue"]);
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
