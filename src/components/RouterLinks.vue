<template>
  <div class="router-link-div">
    <router-link
      v-for="link in routes"
      class="router-link"
      :to="{ name: link.name }"
      >{{ link.name }}
    </router-link>

    <div v-if="!isMobile" />
  </div>
</template>

<script setup lang="ts">
import { routes } from "../router/index";
const props = defineProps({ isMobile: Boolean });
</script>
<style scoped lang="scss">
.router-link-div {
  @apply bg-gray-900 grid p-2
    grid-cols-4
    md:grid-cols-1
    md:grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_1fr];
}
.router-link {
  color: lightgray;
  @apply no-underline p-1 flex 
    justify-center 
    md:justify-start;
}
.router-link:hover {
  @apply no-underline rounded bg-gray-800;
  color: yellow;
}
a {
  font-style: normal;
}
.router-link-active {
  @apply text-yellow;
}
</style>
