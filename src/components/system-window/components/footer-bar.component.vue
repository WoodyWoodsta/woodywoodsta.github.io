<template>
  <section class="footer-bar">
    <slot name="left"></slot>
    <div class="spacer"></div>
    <slot name="right"></slot>
  </section>
</template>

<script>
export default {
  name: 'footer-bar',
};
</script>

<style lang="scss">
  .footer-bar {
    height: $window-footer-bar-height;
    border-top: 1px solid $transparent;
    opacity: 0.65;

    transition: all $transition;
    transition-property: opacity, border-top-color;

    @include flexbox;
    @include flex-direction(row);

    @include decomposite;

    @include theme(dark) {
      border-top-color: $dark-window-border-color;
    }

    @include theme(light) {
      border-top-color: $light-window-border-color;
    }

    @include theme(red) {
      border-top-color: $red-window-border-color;
    }

    @include theme(blue) {
      border-top-color: $blue-window-border-color;
    }

    &:hover {
      opacity: 1;
    }

    .spacer {
      @include flex;
    }
  }
</style>
