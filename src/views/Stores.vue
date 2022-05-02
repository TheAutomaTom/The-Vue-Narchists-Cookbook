<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'piggy-bank']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Pinia </template>
        <template v-slot:card-subtitle
          >Vue 3's recommended state management tool.</template
        >
        <template v-slot:card-content>
          <p>
            State management centralizes data, such as a user's form, that may be
            manipulated from multiple components. It also allows for decoupling backend
            operations before use in a broader context, like submitting api requests.
          </p>
          <p>In this example, 3 components are all sharing the same store.</p>
        </template>
        <template v-slot:card-footer> </template>
      </Card>
      <StoresRadioButtons />
      <StoresSelector />
      <StoresAddStation />
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import StoresRadioButtons from "../components/StoresRadioButtons.vue";
import StoresSelector from "../components/StoresSelector.vue";
import StoresAddStation from "../components/StoresAddStation.vue";
</script>
