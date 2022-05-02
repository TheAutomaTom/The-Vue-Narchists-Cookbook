<template>
  <div class="app-div">
    <!-- Aside/Nav-->
    <div v-if="!isMobile" class="bg-gray-900"></div>
    <RouterLinks :isMobile="isMobile" />

    <!-- Main Content -->
    <main role="main">
      <div :class="mobileClass">
        <router-view />
      </div>
    </main>

    <!-- Right Padding -->
    <div v-if="!isMobile" />
  </div>
  <!-- <footer class="mt-auto">...</footer> -->
</template>
<script setup lang="ts">
import RouterLinks from "./components/RouterLinks.vue";
import { computed, onUnmounted, ref } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

//Cheater sheet: { sm: "300px", md: "768px", lg: "976px", xl: "1440px" }
let isMobile = ref(window.innerWidth < 767.5);
let mobileClass = ref(isMobile.value ? "px-7" : "");
const onResize = (e: Event) => {
  isMobile.value = window.innerWidth < 767.5;
  mobileClass.value = isMobile.value ? "px-7" : "";
};
// const routeName = computed((label: string) => {
//   store.FavoriteStation.station.callSign === label ? "bg-yellow" : "";
// });
</script>
<style scoped lang="postcss">
.app-div {
  @apply h-full grid
    sm:grid-cols-1
    sm:grid-rows-[auto_1fr]
    md:grid-cols-[0.5fr_120px_3fr_1fr]
    md:grid-rows-1;

  height: 100vh;
}
</style>
