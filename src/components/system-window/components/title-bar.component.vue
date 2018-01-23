<template>
  <section class="system-window__title-bar" :class="{ windowModePicker: windowModePicker }">
    <div class="traffic-lights-wrapper">
      <div class="traffic-light close" @click="_onTrafficLightClick('close')">
        <fa-icon class="fa-icon-component" icon="times"></fa-icon>
      </div>
      <div class="traffic-light hide" @click="_onTrafficLightClick('hide')">
        <fa-icon class="fa-icon-component" icon="minus"></fa-icon>
      </div>
      <div class="traffic-light maximise" @click="_onTrafficLightClick('maximise')">
        <fa-icon class="fa-icon-component" icon="sort-down"></fa-icon>
        <fa-icon class="fa-icon-component" icon="sort-up"></fa-icon>
      </div>
    </div>
    <span class="spacer"></span>
    <span>{{ title }}</span>
    <span class="spacer"></span>
    <span class="balancer"></span>
  </section>
</template>

<script>
export default {
  name: 'title-bar',

  props: {
    title: String,
    windowModePicker: Boolean,
  },

  methods: {
    _onTrafficLightClick(type) {
      this.$emit('traffic-light-click', {
        type,
      });
    },
  },
};
</script>

<style lang="scss">
  $traffic-light-size: 13px;
  $traffic-light-red-background: rgb(237, 108, 97);
  $traffic-light-amber-background: rgb(245, 190, 79);
  $traffic-light-green-background: rgb(98, 197, 84);

  .system-window__title-bar {
    min-height: $window-title-bar-height * 2;
    border-bottom: 1px solid $transparent;

    @include flexbox;
    @include flex-direction(row);
    @include align-items(center);

    transform: translateZ(0);
    transition: all $transition;
    transition-property: border-bottom-color;

    @include decomposite;

    @include theme(dark) {
      border-bottom-color: $dark-window-border-color;
    }

    @include theme(light) {
      border-bottom-color: $light-window-border-color;
    }

    @include theme(red) {
      border-bottom-color: $red-window-border-color;
    }

    @include theme(blue) {
      border-bottom-color: $blue-window-border-color;
    }

    > .traffic-lights-wrapper {
      @include px(md);

      @include flexbox;
      @include flex-direction(row);

      line-height: 0;

      > .traffic-light {
        display: inline-block;
        position: relative;
        height: $traffic-light-size;
        width: $traffic-light-size;
        border: 1px solid $dark-semiweak-alpha;
        border-radius: 50%;

        @include flexbox;
        @include align-items(center);
        @include justify-content(center);

        &.close {
          background: rgb(237, 108, 97);

          &:active {
            background: darken($traffic-light-red-background, 8)
          }
        }

        &.hide {
          background: rgb(245, 190, 79);

          &:active {
            background: darken($traffic-light-amber-background, 8)
          }
        }

        &.maximise {
          background: rgb(98, 197, 84);

          &:active {
            background: darken($traffic-light-green-background, 8)
          }

          > .fa-icon-component {
            position: absolute;
            transform: rotate(45deg);
            height: 85%;
            width: 85%;
          }
        }

        > .fa-icon-component {
          height: 75%;
          width: 75%;
          color: $dark-medium-alpha;
          opacity: 0;
        }
      }

      &:hover {
        > .traffic-light {
          > .fa-icon-component {
            opacity: 1;
          }
        }
      }

      > .traffic-light + .traffic-light {
        @include ml(sm);
      }
    }

    &.windowModePicker {
      min-height: $window-title-bar-height;

      > .traffic-lights-wrapper {
        @include px(sm);
      }
    }

    > .balancer {
      width: calc(#{$traffic-light-size * 3} + #{get-size('sm', 4)});
    }

    .spacer {
      @include flex;
    }
  }
</style>
