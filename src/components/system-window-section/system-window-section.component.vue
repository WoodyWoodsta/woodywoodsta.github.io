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

<style lang="scss" scoped>
  .system-window-section {
    border: 1px solid $transparent;
    border-radius: $border-radius;

    transform: translateZ(0);
    backface-visibility: hidden;
    transition: all $transition;
    transition-property: background, border-color;
    will-change: background, border-color;

    @include decomposite;

    @include theme(dark) {
      background: $dark-window-section-background-color;
      border-color: $dark-window-border-color;
    }

    @include theme(light) {
      background: $light-window-section-background-color;
      border-color: $light-window-border-color;
    }

    @include theme(red) {
      background: $red-window-section-background-color;
      border-color: $red-window-border-color;
    }

    @include theme(blue) {
      background: $blue-window-section-background-color;
      border-color: $blue-window-border-color;
    }
  }
</style>
