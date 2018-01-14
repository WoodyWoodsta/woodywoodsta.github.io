<template>
  <section class="system-window-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'system-window-section',
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .system-window-section {
    background: $window-section-background-color;
    border: 1px solid $window-border-color;
    border-radius: $border-radius;

    transform: translateZ(0);
    backface-visibility: hidden;
  }
</style>
