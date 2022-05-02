<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'hat-wizard']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>This app was created with...</template>
        <template v-slot:card-content>
          <ul>
            <li v-for="credit in credits">
              {{ credit.title }}
              <span style="font-size: 0.6rem">
                <em>{{ credit.note }}</em>
              </span>
            </li>
          </ul>
        </template>
        <template v-slot:card-footer>
          Source code
          <a href="https://github.com/TheAutomaTom/The-Vue-Narchists-Cookbook">
            here</a
          ></template
        >
      </Card>

      <p></p>
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
const credits = [
  { title: "Vue 3" },
  { title: "Vite" },
  { title: "Router 4" },
  { title: "Pinia" },
  { title: "Tailwind CSS" },
  { title: "Volar", note: "(recommended Vue 3 VS Extension)" },
];
</script>
<style lang="scss"></style>
