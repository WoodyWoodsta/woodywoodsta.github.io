<template>
  <modal name="about-modal" adaptive :height="'auto'">
    <section class="about-modal-container">
      <!-- <fa-icon class="about-icon" icon="question-circle"></fa-icon> -->
      <p>A portfolio intended to be a part of the portfolio itself. Portfolio-ception.</p>
      <p>Made with the great tech available in the open source community:</p>

      <!-- Tech grid -->
      <div class="tech-grid major">
        <a v-for="item of content.majorTechGridItems" :key="item.name"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon class="tech-icon" v-if="!item.svg"
            :icon="item.icon"
            :set="item.iconSet"
            :class="item.color">
          </fa-icon>
          <svg-icon class="tech-icon" v-if="item.svg"
            :name="item.svg"
            :class="item.color">
          </svg-icon>
        </a>
      </div>
      <div class="tech-grid minor">
        <a v-for="item of content.minorTechGridItems" :key="item.name"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer">
          <fa-icon class="tech-icon" v-if="!item.svg" :key="item.name"
            :icon="item.icon"
            :set="item.iconSet"
            :class="item.color">
          </fa-icon>
          <svg-icon class="tech-icon" v-if="item.svg" :key="item.name"
            :name="item.svg"
            :class="item.color">
          </svg-icon>
        </a>
      </div>
    </section>
  </modal>
</template>

<script>
import * as content from '../../../content/about-modal';

export default {
  name: 'about-modal',

  data() {
    return {
      content,
    };
  },
};
</script>

<style lang="scss">
  .about-modal-container {
    @include modal-container;

    text-align: center;

    @include flexbox;
    @include flex-direction(column);
    @include align-items(center);
    @include justify-content(center);

    > .about-icon {
      height: 60px;
      width: 60px;

      @include mb(lg);
    }

    > .tech-grid {
      @include flexbox;
      @include flex-wrap(wrap);

      &.major {
        @include mt(md);

        > a {
          > .tech-icon {
            height: 56px;
            width: 56px;

            @include m(sm);
          }
        }
      }

      &.minor {
        @include mt(md);

        > a {
          > .tech-icon {
            height: 28px;
            width: 28px;

            @include m(xs);
          }
        }
      }

      > a {
        > .tech-icon {
          cursor: pointer;

          transition: all $transition;
          transition-property: transform, color;

          &:hover {
            transform: scale(1.1);

            &.pink {
              color: material-color('pink', '400');
            }
            &.teal {
              color: material-color('teal', '400');
            }
            &.light-blue {
              color: material-color('light-blue', '400');
            }
            &.yellow {
              color: material-color('yellow', '400');
            }
            &.amber {
              color: material-color('amber', '400');
            }
            &.deep-orange {
              color: material-color('deep-orange', '400');
            }
            &.cyan {
              color: material-color('cyan', '400');
            }
            &.blue {
              color: material-color('blue', '400');
            }
            &.red {
              color: material-color('red', '400');
            }
            &.purple {
              color: material-color('purple', '400');
            }
            &.green {
              color: material-color('green', '400');
            }
            &.indigo {
              color: material-color('indigo', '400');
            }
            &.light-green {
              color: material-color('light-green', '400');
            }
          }
        }
      }
    }
  }
</style>
