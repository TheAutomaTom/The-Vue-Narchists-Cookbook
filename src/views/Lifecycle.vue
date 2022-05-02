<template>
  <Body>
    <template v-slot:page-title-icon>
      <fa :icon="['fas', 'book-skull']" />
    </template>
    <template v-slot:page-content>
      <Card>
        <template v-slot:card-title>Basic events</template>
        <template v-slot:card-content>
          <ul>
            <li>
              <strong>onMounted()</strong>
              Runs at component creation
              <p>Example:</p>
              <div class="code-text">
                <p>onMounted(() => {</p>
                <p class="code-text">
                  window.addEventListener("resize", onResize);
                </p>
                <p>});</p>
              </div>
            </li>
            <li>
              <strong>onUnmounted()</strong> Runs at component destruction
              <p>Example:</p>
              <div class="code-text">
                <p>onUnmounted(() => {</p>
                <p class="code-text">
                  window.removeEventListener("resize", onResize);
                </p>
                <p>});</p>
              </div>
            </li>
          </ul>
        </template>
        <template v-slot:card-footer>
          <a href="https://vuejs.org/api/composition-api-lifecycle.html">
            Related docs here</a
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
import { ref } from "vue";
</script>
<style scoped lang="scss"></style>
