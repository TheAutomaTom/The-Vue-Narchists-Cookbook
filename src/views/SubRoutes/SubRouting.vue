<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'wand-sparkles']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Routes with Parameters</template>
        <template v-slot:card-content>
          blah blah blah...

          <Configure />
          <router-link class="router-link" to="SubView">SubView </router-link>
          <hr />
          <router-view />
          <hr />
        </template>
        <template v-slot:card-footer> ...</template>
      </Card>
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../../components/Body.vue";
import Card from "../../components/Card.vue";
import Configure from "./Configure.vue";
import { ref } from "vue";
</script>
<style scoped lang="scss"></style>
