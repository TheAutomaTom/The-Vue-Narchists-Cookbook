<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'satellite-dish']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Parent-to-Child Communication</template>
        <template v-slot:card-content>
          This is primary way a parent component can send data to its children.
          <div class="flex my-2">
            <span>Input at Parent: </span>
            <input type="text" class="grow bg-gray-200 ml-2" v-model="msg" />
          </div>
          <Card>
            <template v-slot:card-title>Child Component</template>
            <template v-slot:card-content class="text-lg">
              <PropsExample :message="msg" :routerProp="routerProp" />
            </template>
          </Card>

          <!-- Syntax notes... -->
          <p>Parent Syntax:</p>
          <div class="code-text">
            <p>&lt;PropsExample :message="msg"/&gt;</p>
            <p>&lt;Script... &gt; const msg = ref("Can you hear me, now?");</p>
          </div>

          <p>Child Syntax:</p>
          <p class="code-text">
            &lt;span&gt;Output at Child: {{ curliesOpen }}message
            {{ curliesClose }} &lt;/span&gt;
          </p>
        </template>
        <template v-slot:card-footer></template>
      </Card>
    </template>
  </Body>
</template>

<script setup lang="ts">
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import PropsExample from "../components/PropsExample.vue";
import { ref } from "vue";

const props = defineProps({
  routerProp: { type: String },
});

const msg = ref("Can you hear me, now?");
const curliesOpen = "{{";
const curliesClose = "}}";
</script>
<style scoped lang="scss"></style>
