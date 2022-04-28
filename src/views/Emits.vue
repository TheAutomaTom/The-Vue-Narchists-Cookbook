<template>
  <Body>
    <template v-slot:page-title> Emits</template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Child-to-Parent Communication</template>
        <template v-slot:card-content>
          This is primary way a child component can send data to it's immediate
          parent.

          <Card>
            <template v-slot:card-title>Child Component</template>
            <template v-slot:card-content>
              <EmitsExample @updated="msg = msg" />
            </template>
          </Card>
          <div class="flex my-2">
            <span class="pl-5"
              >Output at Parent: <strong>{{ msg }}</strong>
            </span>
          </div>

          <p>Parent Syntax:</p>
          <span class="code-text"
            >&lt;PropsExample :message="msg"&gt; &lt;/PropsExample&gt;</span
          >
          <p class="code-text">
            &lt;Script... &gt; const msg = ref("Can you hear me, now?");
          </p>
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
import EmitsExample from "../components/EmitsExample.vue";
import { ref } from "vue";
const msg = ref("Can you hear me, now?");
const curliesOpen = "{{";
const curliesClose = "}}";
</script>
<style scoped lang="scss"></style>
