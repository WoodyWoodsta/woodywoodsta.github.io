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

    overflow: hidden;

    > .side-pane {
      min-width: 400px;
    }

    > .viewer-pane {
      max-height: 100%;
      box-sizing: border-box;
      overflow-y: scroll;

      @include flex;
      @include m(md);
    }
  }
</style>
