<template>
  <Body>
    <template v-slot:page-title> Title... </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>...</template>
        <template v-slot:card-content>
          <Card>
            <template v-slot:card-title>Example Title Slot</template>
            <template v-slot:card-content>Example Content Slot </template>
            <template v-slot:card-footer>Example Footer Slot</template>
          </Card>
        </template>
        <template v-slot:card-footer> ...</template>
      </Card>
      <p></p>
    </template>
  </Body>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
<style scoped lang="scss"></style>
