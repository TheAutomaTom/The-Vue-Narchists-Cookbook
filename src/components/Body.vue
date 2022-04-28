<template>
  <div class="p-3">
    <h3 class="page-title">
      <slot name="page-title">Page Title</slot>
    </h3>
    <div>
      <slot name="page-content">Empty...</slot>
    </div>
  </div>
</template>

<!-- <script setup lang="ts"></script> -->
<!-- SCOPED -->
<style scoped lang="scss">
.page-title {
  @apply text-xl font-bold text-gray-600;
}
// <!-- UNSCOPED -->
</style>
<style lang="scss">
html,
body {
  @apply text-gray-800;
}
ul {
  @apply px-2;
  list-style: disc inside;
}
a {
  @apply italic font-bold underline;
}
a:hover {
  @apply italic bg-yellow rounded no-underline;
}
.code-text {
  @apply pl-2 text-code font-mono font-bold;
}
</style>
