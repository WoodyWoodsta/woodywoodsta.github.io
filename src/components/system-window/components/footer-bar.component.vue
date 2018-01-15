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
    @include flexbox;
    @include flex-direction(row);

    height: $footer-bar-height;
    border-top: 1px solid $light-weak-alpha;

    .spacer {
      @include flex;
    }
  }
</style>
