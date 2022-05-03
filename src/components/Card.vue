<template>
  <div class="card">
    <span class="card-title">
      <slot name="card-title">Card Title</slot>
    </span>
    <span class="card-subtitle">
      <slot name="card-subtitle"></slot>
    </span>
    <hr />
    <div class="card-content">
      <slot name="card-content"></slot>
    </div>
    <div class="card-footer">
      <slot name="card-footer" class="card-footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<!-- SCOPED -->
<style scoped lang="scss">
.card {
  @apply p-2 mb-2 rounded-lg border-2 shadow-lg;
}
.card-title {
  @apply text-lg font-bold;
}
.card-subtitle {
  @apply text-gray-600 italic;
  font-size: 0.75rem;
}
.card-content {
  @apply text-sm p-2;
}
.card-footer {
  @apply text-sm font-bold pr-10;
}
</style>
