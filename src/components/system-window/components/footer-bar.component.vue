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
    border-top: 1px solid $light-weak-alpha;
    opacity: 0.65;

    transition: all $transition;
    transition-property: opacity;

    @include flexbox;
    @include flex-direction(row);

    @include theme(light) {
      border-top-color: $dark-semiweak-alpha;
    }

    &:hover {
      opacity: 1;
    }

    .spacer {
      @include flex;
    }
  }
</style>
