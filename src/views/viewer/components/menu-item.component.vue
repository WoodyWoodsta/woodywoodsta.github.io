<template>
  <section class="menu-item" :class="{ active }">
    <div class="item-components-wrapper">
      <fa-icon class="menu-item-icon" :set="view.options.set" :icon="view.options.icon"></fa-icon>
      <span>{{ view.title }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'menu-item',

  props: {
    view: {
      type: Object,
      required: true,
    },
    active: Boolean,
  },
};
</script>

<style lang="scss">
  $border-style: 1px solid $transparent;

  .menu-item {
    display: block;
    height: 50px;
    cursor: pointer;
    border-top: $border-style;
    border-bottom: $border-style;

    &:hover {
      &:not(.active) {
        background: transparentize($dark-weak-alpha, 0.05);
      }
    }

    &.active {
      background: $dark-semiweak-alpha;
      border-color: $light-semiweak-alpha;

      @include theme(light) {
        background: transparentize($dark-semiweak-alpha, 0.09);
        border-color: $dark-semiweak-alpha;
      }
    }

    > .item-components-wrapper {
      height: 100%;
      width: 100%;
      box-sizing: border-box;

      @include flexbox;
      @include flex-direction('row');
      @include align-items(center);

      @include p(md);
      @include pl(ml);

      > .menu-item-icon {
        height: 18px;
        width: 18px;

        @include mr(md);
      }
    }
  }
</style>
