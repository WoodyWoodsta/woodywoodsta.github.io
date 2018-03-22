<template>
  <section class="tech-skill" :class="{ highlighted: skill.highlighted, hoveringOnBlock, active }">
    <span class="title">{{ skill.title }}</span>

    <!-- Overlay -->
    <transition name="fade">
      <div class="overlay" v-if="active" ref="overlay"
        :style="{
          left: horizontalOffset ? `calc(50% ${horizontalOffset > 0 ? '+' : '-'} ${Math.abs(horizontalOffset)}px)` : undefined
        }">
        <div class="header-wrapper">
          <div class="logo-wrapper">
            <fa-icon class="logo" v-if="skill.icon" :icon="skill.icon" :set="skill.iconSet"></fa-icon>
            <svg-icon class="logo" v-if="skill.svg" :name="skill.svg"></svg-icon>
            <span class="text-icon" v-if="skill.textIcon">{{ skill.textIcon }}</span>
          </div>
          <a class="title" :href="skill.link" target="_blank" rel="noopener noreferrer">{{ skill.title }}</a>
          <fa-icon class="external-link-icon" icon="external-link-square-alt"></fa-icon>

          <div class="spacer"></div>
          <fa-button class="close-button" icon="times"></fa-button>
        </div>

        <div class="body-wrapper">
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'tech-skill',

  props: {
    skill: {
      type: Object,
      required: true,
    },
    hoveringOnBlock: Boolean,
    active: Boolean,
    parentDimsFn: Function,
  },

  watch: {
    active: function onActiveChange(newValue) {
      if (newValue) {
        this._positionSkillOverlay();
      }
    },
  },

  created() {
    this._boundMethods = {
      ...this._boundMethods,
      _onWindowResize: this._onWindowResize.bind(this),
    };

    window.addEventListener('resize', this._boundMethods._onWindowResize);
  },

  destroyed() {
    window.removeEventListener('resize', this._boundMethods._onWindowResize);
  },

  data() {
    return {
      overlayActive: false,
      horizontalOffset: 0,

      rects: {
        parentRects: null,
        overlayRects: null,
      },
      requiresNewRects: true,

      _boundMethods: {},
    };
  },

  methods: {
    _positionSkillOverlay() {
      setTimeout(() => {
        if (this.requiresNewRects || Object.values(this.rects).some(member => typeof member !== 'object')) {
          console.log('Calculating rects');
          this.rects.parentRects = this.parentDimsFn();
          this.rects.overlayRects = this.$refs && this.$refs.overlay && this.$refs.overlay.getBoundingClientRect();

          this.requiresNewRects = false;
        }

        if (this.rects.overlayRects) {
          if (this.rects.overlayRects.left < this.rects.parentRects.left) {
            this.horizontalOffset = this.rects.parentRects.left - this.rects.overlayRects.left;
          } else if (this.rects.overlayRects.right > this.rects.parentRects.right) {
            this.horizontalOffset = this.rects.parentRects.right - this.rects.overlayRects.right;
          }
        }
      });
    },

    _onWindowResize() {
      this.requiresNewRects = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .tech-skill {
    position: relative;
    min-width: 40px;
    background: $light-weak-alpha;
    cursor: pointer;

    @include p(sm);

    @include flexbox;
    @include flex-direction(row);
    @include align-items(center);

    &,
    > .overlay {
      border: 1px solid transparent;
      border-radius: $border-radius;
      box-sizing: border-box;

      @include decomposite;

      transition: all $transition;
      transition-property: transform, background-color, border-color, opacity;
    }

    &.highlighted,
    &:hover,
    > .overlay {
      border-color: $light-medium-alpha;
    }

    &:hover {
      background: $dark-window-background-color;
    }

    &.hoveringOnBlock {
      &:not(:hover):not(.active) {
        border-color: transparent;
        opacity: 0.4;
      }
    }

    &.active {
      z-index: 1;
    }

    > .overlay {
      position: absolute;
      left: 50%;
      box-sizing: border-box;
      min-width: 300px;
      transform: translateZ(0) translate(-50%);
      background: $dark-window-background-color;
      z-index: 1;
      text-align: start;

      @include flex-direction(column);
      @include align-items(start);
      @include justify-content(center);

      @include p(md);

      > .header-wrapper {
        @include flexbox;
        @include flex-direction(row);
        @include align-items(center);

        > .title {
          text-decoration: underline;
        }

        > .external-link-icon {
          height: 12px;
          width: 12px;

          @include ml(xs);
        }

        > .logo-wrapper {
          > .logo,
          > .text-icon {
            @include mr(md);
            @include decomposite;
          }

          > .logo {
            height: 18px;
            width: 18px;
          }

          > .text-icon {
            background: $light-strong-alpha;
            color: $dark-strong-alpha;
            border-radius: $border-radius;
            font-weight: 900;
            font-size: 0.75rem;

            @include p(xxs);
          }
        }

        > .close-button {
          height: 18px;
          width: 18px;
        }
      }

      > .body-wrapper {
        font-style: italic;

        > p {
          @include mb(none);
        }
      }
    }

    .spacer {
      @include flex;
    }

    // Transition
    .fade-enter-active, .fade-leave-active {
      transition: all $transition;
      transition-property: opacity;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
