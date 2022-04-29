<template>
  <Body>
    <template v-slot:page-title> Stores </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Pinia </template>
        <template v-slot:card-subtitle
          >Vue 3's recommended state management tool.</template
        >
        <template v-slot:card-content>
          <p>
            State management centralizes data, such as a user's form, that may
            be manipulated from multiple components. It also allows for
            decoupling backend operations before use in a broader context, like
            submitting api requests.
          </p>
        </template>
        <template v-slot:card-footer> </template>
      </Card>
      <StoresRadioButtons />
      <StoresSelector />
    </template>
  </Body>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import StoresRadioButtons from "../components/StoresRadioButtons.vue";
import StoresSelector from "../components/StoresSelector.vue";
</script>
