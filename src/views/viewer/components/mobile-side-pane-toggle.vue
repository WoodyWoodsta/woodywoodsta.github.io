<template>
  <section class="mobile-side-pane-toggle" :class="{ active }">
    <div class="button-container">
      <template v-if="!active">
        <fa-icon class="button-icon bars-icon" icon="bars"></fa-icon>
        <span>Menu</span>
      </template>
      <fa-icon v-if="active" class="button-icon arrow-left-icon" icon="arrow-left"></fa-icon>
    </div>
  </section>
</template>

<script>
export default {
  name: 'mobile-side-pane-toggle',

  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss">
  .mobile-side-pane-toggle {
    @include flexbox;
    @include flex-direction(row);
    @include justify-content(start);

    > .button-container {
      @include flexbox;
      @include flex-direction(row);
      @include align-items(center);

      > .button-icon {
        height: 18px;
        width: 18px;
      }

      > .bars-icon {
        @include mr(sm);
      }
    }

    &.active {
      @include justify-content(flex-end);
    }
  }
</style>
