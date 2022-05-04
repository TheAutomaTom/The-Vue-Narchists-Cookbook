<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'binoculars']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Basic</template>
        <template v-slot:card-content>
            <p>Watched Variable: {{basicWatch}}</p>
            <GInputWithLabel label="Input:" v-model="basicWatch"/>
            <p>Count of changes: {{basicWatchChanges}}</p>

            </template>
        <template v-slot:card-footer></template>
      </Card>

      <p></p>
    </template>
  </Body>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import GInputWithLabel from "../controls/GInputWithLabel.vue";

const basicWatch = ref("This is a basic variable with a watcher...")
const basicWatchChanges = ref(0);


watch(basicWatch, (newValue, oldValue) => {
    basicWatchChanges.value++
});
</script>
<style lang="scss"></style>