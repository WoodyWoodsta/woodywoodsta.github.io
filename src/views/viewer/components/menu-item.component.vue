<template>
  <section class="menu-item" :class="{ active }">
    <div class="item-components-wrapper">
      <fa-icon class="menu-item-icon" :set="item.options.set" :icon="item.options.icon"></fa-icon>
      <span>{{ item.title }}</span>
      <div class="spacer"></div>

      <!-- Tneme Indicator -->
      <div class="theme-indicator" :class="_computeThemeIndicatorClass(item)"
        v-if="item && item.theme">
        <div class="theme-indicator-outline"></div>
      </div>

      <!-- External Link Indictor -->
      <fa-icon class="item-secondary-charm" icon="external-link-square-alt"
        v-if="_isExternaLink(item)">
      </fa-icon>
    </div>
  </section>
</template>

<script>
import { MENU_ITEM_TYPES } from '../../../constants/viewer';

export default {
  name: 'menu-item',

  props: {
    item: Object,
    active: Boolean,
  },

  methods: {
    _computeThemeIndicatorClass(item) {
      if (item && item.theme && item.theme.class) {
        return { [item.theme.class]: true };
      }
    },

    _isExternaLink(item) {
      return item && item.options && MENU_ITEM_TYPES.SOCIAL_LINK === item.options.type;
    },
  },
};
</script>

<style lang="scss">
  $border-style: 1px solid $transparent;
  $indicator-base-size: 12px;

  .menu-item {
    display: block;
    height: 40px;
    cursor: pointer;
    border-bottom: $border-style;

    &:not(:first-child) {
      border-top: $border-style;
    }

    &:hover,
    &.active {
      > .item-components-wrapper {
        > .theme-indicator {
          > .theme-indicator-outline {
            left: -11px;
          }
        }
      }
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

      > .item-components-wrapper {
        > .theme-indicator {
          width: $indicator-base-size + 10px;

          > .theme-indicator-outline {
            left: -1px;
          }
        }
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
        position: relative;
        box-sizing: border-box;
        height: $indicator-base-size;
        width: $indicator-base-size;

        transition: all $transition;
        transition-property: width;

        &,
        > .theme-indicator-outline {
          border: 1px solid $light-normal-alpha;
          border-radius: $indicator-base-size / 2.5;

          @include theme(light) {
            border: 1px solid $dark-normal-alpha;
          }
        }

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

        > .theme-indicator-outline {
          position: absolute;
          left: -1px;
          top: -1px;
          right: -1px;
          bottom: -1px;

          transition: all $transition;
          transition-property: left;
        }
      }

      > .item-secondary-charm {
        height: 15px;
        width: 15px;
        opacity: 0.45;
      }
    }

    .spacer {
      @include flex;
    }
  }
</style>
