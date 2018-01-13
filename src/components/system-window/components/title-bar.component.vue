<template>
  <section class="system-window__title-bar">
    <div class="traffic-lights-wrapper">
      <div class="traffic-light close"></div>
      <div class="traffic-light hide"></div>
      <div class="traffic-light maximise"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'title-bar',
};
</script>

<style lang="scss">
  @import '../../../assets/styles/index';

  $traffic-light-size: 15px;

  .system-window__title-bar {
    min-height: 30px;
    border-bottom: 1px solid $divider-color;

    @include flexbox;
    @include flex-direction(row);
    @include align-items(center);

    .traffic-lights-wrapper {
      @extend .pl-sm, .pr-sm;

      line-height: 0;

      .traffic-light {
        display: inline-block;
        height: $traffic-light-size;
        width: $traffic-light-size;
        border-radius: 50%;

        & + & {
          @extend .ml-sm;
        }

        &.close {
          background: rgb(237, 108, 97);
        }

        &.hide {
          background: rgb(245, 190, 79);
        }

        &.maximise {
          background: rgb(98, 197, 84);
        }
      }
    }
  }
</style>
