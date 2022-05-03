<template>
  <span class="text-lg"
    >Output at Child: <strong>{{ message }}</strong></span
  >
</template>

<script setup lang="ts">
// Javascript:
//const props = defineProps({ message: String });
// JS w/ default defined:
const props = defineProps({
  message: { type: String, default: "This is my default value!" },
});

// Alternative TS syntax...
// Typescript w/ default value defined:
// interface Props {
//   message?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   message: "This is my default value!",
// });
</script>
