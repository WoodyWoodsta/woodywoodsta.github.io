<template>
  <section class="mobile-side-pane-toggle" :class="{ active }">
    <template v-if="active">
      <div class="spacer"></div>
      <about-button class="about-button-component"></about-button>
    </template>
    <div class="button-container" @click="_onMenuButtonClick()">
      <template v-if="!active">
        <fa-icon class="button-icon bars-icon" icon="bars"></fa-icon>
        <span>Menu</span>
      </template>
    </div>
    <fa-button v-if="active" class="button-icon arrow-left-icon"
      icon="arrow-left"
      @click.native="_onArrowLeftButtonClick()">
    </fa-button>
  </section>
</template>

<script>
export default {
  name: 'mobile-side-pane-toggle',

  props: {
    active: Boolean,
  },

  methods: {
    _onMenuButtonClick() {
      this.$emit('menu-button-click');
    },

    _onArrowLeftButtonClick() {
      this.$emit('arrow-left-button-click');
    },
  },
};
</script>

<style lang="scss">
  .mobile-side-pane-toggle {
    @include flexbox;
    @include flex-direction(row);
    @include justify-content(start);

    min-height: $about-button-size;

    > .button-container {
      @include flexbox;
      @include flex-direction(row);
      @include align-items(center);

      cursor: pointer;


      > .bars-icon {
        @include mr(sm);
      }
    }

    > .about-button-component {
      @include mr(sm);
    }

    .button-icon {
      height: 18px;
      width: 18px;

      &.arrow-left-icon {
        height: $about-button-size;
        width: $about-button-size
      }
    }

    .spacer {
      @include flex;
    }
  }
</style>
