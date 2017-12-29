<template>
  <section class="smart-nav-controls-component">
    <div class="controls-wrapper row center-xs middle-xs no-gap">
      <div class="controls-container">
        <fa-button class="fa-button" icon="arrow-up" @click.native="_onUpButtonClick"></fa-button>
        <fa-button class="fa-button" icon="arrow-down" @click.native="_onDownButtonClick"></fa-button>
        <fa-button class="fa-button" icon="question" @click.native="_onAboutButtonClick"></fa-button>
      </div>
    </div>
  </section>
</template>

<script>
const NAVIGATE_UP = 'navigate-up';
const NAVIGATE_DOWN = 'navigate-down';
const ABOUT = 'about';

export default {
  name: 'smart-nav-controls',

  methods: {
    _onUpButtonClick() {
      this.$emit(NAVIGATE_UP);
    },

    _onDownButtonClick() {
      this.$emit(NAVIGATE_DOWN);
    },

    _onAboutButtonClick() {
      this.$emit(ABOUT);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .smart-nav-controls-component {
    > .controls-wrapper {
      opacity: 0.5;
      transition: opacity $transition;

      &:hover {
        opacity: 1;
      }

      > .controls-container {
        background: $light-weak-alpha;
        line-height: 0;
        border-radius: (2 * $border-radius) (2 * $border-radius) 0 0;

        @extend .p-sm;

        @media screen and (max-width: get-breakpoint('md')) {
          .fa-button {
            height: 20px;
            width: 20px;
          }
        }

        > .fa-button + .fa-button {
          @extend .ml-sm;
        }
      }
    }
  }

  body.light {
    .smart-nav-controls-component {
      > .controls-wrapper {
        > .controls-container {
          background: $dark-weak-alpha;
        }
      }
    }
  }
</style>
