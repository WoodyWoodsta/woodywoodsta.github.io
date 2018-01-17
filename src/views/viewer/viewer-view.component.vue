<template>
  <section class="viewer-view">
    <div class="side-pane">

    </div>
    <system-window-section class="viewer-pane">
      <router-view></router-view>
    </system-window-section>
  </section>
</template>

<script>
export default {
  name: 'viewer-view',
};
</script>

<style lang="scss">
  .viewer-view {
    @include view(contained);
    @include flexbox;
    @include flex-direction(row);

    > .side-pane {
      min-width: $side-pane-width;
    }

    > .viewer-pane {
      box-sizing: border-box;
      overflow-y: scroll;

      @include flex;
      @include m(md);

      margin-top: calc(#{-$window-title-bar-height * 2} + #{get-size(md)});
    }
  }
</style>
