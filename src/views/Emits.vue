<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'radio']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Child-to-Parent Communication</template>
        <template v-slot:card-content>
          This is primary way a child component can send data to it's immediate
          parent.

          <Card>
            <template v-slot:card-title>Child Component</template>
            <template v-slot:card-content>
              <EmitsExample @updated="update" />
            </template>
          </Card>
          <div class="flex">
            <span class="text-lg">
              Output at Parent: <strong>{{ msg }}</strong>
            </span>
          </div>
          <hr />
          <p>Child Syntax:</p>
          <p class="code-text">
            <p class="code-text"
              >&lt;input ... @input="handleUpdate"&gt; 
            </p>
            <p class="code-text">&lt;Script... &gt; </p> 
            <p class="code-text">const emits = defineEmits(["updated"]);</p>
            <div class="code-text">
              <p >const handleUpdate = () => {</p>
              <p class="code-text">emits("updated", msg.value);</p>
              <p >};</p>
            </div>

          </p>

          <p>Parent Syntax:</p>
          <div class="code-text">
            &lt;EmitsExample @updated="update"/&gt;
            <p >&lt;Script... &gt; </p> 
            <p class="code-text">const msg = ref("Can you hear me, now?");</p>
            <p class="code-text">const update = (newMsg: string) => </p>
            <p>{ msg.value = newMsg; };</p>
              
          </div>
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
const update = (newMsg: string) => {
  msg.value = newMsg;
};
{
}
const curliesOpen = "{{";
const curliesClose = "}}";
</script>
<style scoped lang="scss"></style>
