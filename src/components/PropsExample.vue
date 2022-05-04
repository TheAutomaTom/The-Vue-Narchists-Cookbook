<template>
  <p class="text-lg">
    Output at Child: <strong>{{ message }}</strong>
  </p>
  <p class="text-md">
    <!-- Prop defined in Router: <strong>{{ routerProp }}</strong> -->
  </p>
</template>

<script setup lang="ts">
// Javascript:
//const props = defineProps({ message: String });
// JS w/ default defined:
const props = defineProps({
  message: { type: String, default: "Default value set in component!" },
  // routerProp: { type: String },
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
