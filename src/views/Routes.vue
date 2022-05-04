<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'wand-sparkles']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Nested Routes</template>
        <template v-slot:card-content> <router-view/> </template>
        <template v-slot:card-footer> ...</template>
      </Card>
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import { ref } from "vue";
</script>
<style scoped lang="scss"></style>