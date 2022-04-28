<template>
  <div class="flex my-2">
    <span>Input at Child: </span>
    <input
      type="text"
      class="grow bg-gray-200 ml-2"
      v-model="msg"
      @change="$emit('updated', msg)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmitsVue from "../views/Emits.vue";
const msg = ref("Can you hear me, now?");
const emits = defineEmits(["updated"]);
</script>
<style scoped lang="scss"></style>
