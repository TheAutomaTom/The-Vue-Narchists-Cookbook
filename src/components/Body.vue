<template>
  <div class="p-3">
    <span class="page-title">
      <slot name="page-title">Page Title</slot>
    </span>
    <span class="page-subtitle">
      <slot name="page-subtitle" />
    </span>
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
.page-subtitle {
  @apply text-gray-600 italic;
  font-size: 0.75rem;
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
.radio-button-group {
  @apply flex justify-around;
}
.radio-button-group label {
  @apply mb-2 px-2 rounded-md border-2;
}
.radio-button-group label:hover {
  @apply bg-yellow border-yellow;
}
select {
  @apply bg-yellow rounded-md border-2;
}
</style>
