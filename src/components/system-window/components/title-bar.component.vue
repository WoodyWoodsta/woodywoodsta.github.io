<template>
  <section class="system-window__title-bar">
    <div class="traffic-lights-wrapper">
      <div class="traffic-light close">
        <fa-icon class="fa-icon-component" icon="times"></fa-icon>
      </div>
      <div class="traffic-light hide">
        <fa-icon class="fa-icon-component" icon="minus"></fa-icon>
      </div>
      <div class="traffic-light maximise">
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
  },
};
</script>

<style lang="scss">
  @import '../../../assets/styles/index';

  $traffic-light-size: 13px;

  .system-window__title-bar {
    min-height: 30px;
    border-bottom: 1px solid $light-weak-alpha;

    @include flexbox;
    @include flex-direction(row);
    @include align-items(center);

    > .traffic-lights-wrapper {
      @extend .pl-sm, .pr-sm;

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
        }

        &.hide {
          background: rgb(245, 190, 79);
        }

        &.maximise {
          background: rgb(98, 197, 84);

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
        @extend .ml-sm;
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
