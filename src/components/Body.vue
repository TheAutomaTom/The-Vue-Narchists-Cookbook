<template>
  <div class="p-3">
    <!-- Icon & Title ----------------------->
    <h1 class="page-title">
      <slot name="page-title-icon">
        <fa :icon="['fas', 'circle-check']" />
      </slot>
      <span>
        <slot name="page-title">
          {{ $route.name }}
        </slot>
      </span>
    </h1>
    <!-- Subtitle --------------------------->
    <span class="page-subtitle">
      <slot name="page-subtitle" />
    </span>
    <!-- Content ---------------------------->
    <div>
      <slot name="page-content">Empty...</slot>
    </div>
    <!--------------------------------------->
  </div>
</template>

<!-- <script setup lang="ts"></script> -->
<!-- SCOPED -->
<style scoped lang="scss">
.page-title {
  @apply text-xl font-bold text-gray-600 pb-1 pl-1;
}
.page-title span {
  @apply p-1;
}
.page-subtitle {
  @apply text-gray-600 italic;
  font-size: 0.75rem;
}
</style>
<!-- UNSCOPED -->
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
  @apply flex flex-wrap justify-around;
}
button {
  @apply font-bold;
}
button,
.radio-button-group label {
  @apply mb-2 px-2 rounded-md border-2;
}
button:hover,
.radio-button-group label:hover {
  @apply bg-yellow border-yellow;
}
select {
  @apply bg-gray-200 rounded-md border-2;
}
input {
  @apply grow bg-gray-200 ml-2;
}
input {
  padding-left: 6px !important;
}
</style>
