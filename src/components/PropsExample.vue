<template>
  <span
    >Output at Child: <strong>{{ message }}</strong></span
  >
</template>

<script setup lang="ts">
const props = defineProps({ message: String });
</script>
<style scoped lang="scss"></style>
