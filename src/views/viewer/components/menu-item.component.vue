<template>
  <section class="menu-item" :class="{ active }">
    <div class="item-components-wrapper">
      <fa-icon class="menu-item-icon" :set="view.options.set" :icon="view.options.icon"></fa-icon>
      <span>{{ view.title }}</span>
      <div class="spacer"></div>
      <div class="theme-indicator" :class="{ [view.theme.class]: true }"></div>
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
    border-bottom: $border-style;

    &:not(:first-child) {
      border-top: $border-style;
    }

    &:hover {
      &:not(.active) {
        background: transparentize($dark-weak-alpha, 0.05);
      }
    }

    &.active {
      background: $dark-semiweak-alpha;

      @include theme(dark) {
        border-color: $dark-window-border-color;
      }

      @include theme(red) {
        border-color: $red-window-border-color;
      }

      @include theme(blue) {
        border-color: $blue-window-border-color;
      }

      @include theme(light) {
        border-color: $light-window-border-color;
        background: transparentize($dark-semiweak-alpha, 0.09);
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

      > .theme-indicator {
        height: 10px;
        width: 10px;
        border: 1px solid $light-normal-alpha;
        border-radius: 50%;

        &.dark {
          background: $dark-theme-primary;
        }
        &.light {
          background: $light-theme-primary;
        }
        &.red {
          background: $red-theme-primary;
        }
        &.blue {
          background: $blue-theme-primary;
        }

        @include theme(light) {
          border: 1px solid $dark-normal-alpha;
        }
      }
    }

    .spacer {
      @include flex;
    }
  }
</style>
