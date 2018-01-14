<template>
  <section class="picker-view" :class="{ isLeaving, hasLeft }"
    ref="component">
    <system-page class="system-page-component">
      <fa-icon class="picker-icon mb-md" icon="power-off"></fa-icon>
      <h2>Pick a recent project:</h2>

      <system-window-section class="project-picker">
        <div class="header">
          <span>Projects</span>
          <div class="spacer"></div>
          <span>Last Modified</span>
        </div>

        <div class="project-item" @click="_onProjectItemClick">
          <div class="project-title">
            <fa-icon class="project-icon mr-sm" icon="folder"></fa-icon>
            <span>Sean Wood</span>
          </div>
          <div class="spacer"></div>
          <div class="last-modified">Some date</div>
        </div>
      </system-window-section>

    </system-page>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import * as navigationConsts from '../../constants/navigation';

const LEAVE_DELAY = 300;

export default {
  name: 'picker-view',

  data() {
    return {
      isLeaving: false,
      hasLeft: false,
    };
  },

  methods: {
    ...mapActions('navigation', [navigationConsts.ACTIONS.NAVIGATE]),

    _onProjectItemClick() {
      this[navigationConsts.ACTIONS.NAVIGATE](navigationConsts.VIEWS.HOME.name);
    },
  },

  // Router
  beforeRouteLeave(to, from, next) {
    this.isLeaving = true;

    this.$refs.component.addEventListener('transitionend', () => {
      this.hasLeft = true;
      setTimeout(() => next(), LEAVE_DELAY);
    });
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .picker-view {
    @include view;

    opacity: 1;

    transition: all $transition;
    transition-property: opacity;

    > .system-page-component {
      @include flexbox;
      @include flex-direction(column);
      @include align-items(center);
      @include justify-content(center);

      > .picker-icon {
        height: 40px;
        width: 40px;
      }

      > .project-picker {
        @include flex;
        @include align-self(stretch);

        > .header {
          @include flexbox;
          @include flex-direction(row);

          @extend .pl-md, .pr-md, .pt-sm, .pb-sm;

          font-style: italic;
          border-bottom: 1px solid $light-weak-alpha;

          > span {
            opacity: 0.6;
          }
        }

        > .project-item {
          @extend .p-md;

          @include flexbox;
          @include flex-direction(row);
          @include align-items(center);

          cursor: pointer;

          &:hover {
            background: $dark-weak-alpha;
          }

          &:active {
            background: $dark-semiweak-alpha;
          }

          > .project-title {
            @include flexbox;
            @include flex-direction(row);
            @include align-items(center);

            > .project-icon {
              height: 17px;
              width: 17px;
            }
          }
        }
      }
    }

    .spacer {
      @include flex;
    }

    &.isLeaving,
    &.hasLeft {
      opacity: 0;
    }

    &.hasLeft {
      display: none;
    }
  }
</style>
