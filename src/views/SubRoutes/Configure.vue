<template>
  <Card>
    <template v-slot:card-title>Configuration</template>
    <template v-slot:card-content>Example Content Slot </template>
    <template v-slot:card-footer>Example Footer Slot</template>
  </Card>
</template>

<script setup lang="ts">
import Card from "../../components/Card.vue";
import { ref } from "vue";
</script>
<style scoped lang="scss"></style>
