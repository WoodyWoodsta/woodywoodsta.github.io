<template>
  <section class="intro-view">
    <system-page class="system-page-component">
      <fa-icon class="intro-icon mb-md" icon="power-off"></fa-icon>
      <h2>Pick a recent project:</h2>

      <div class="project-picker">
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
      </div>

    </system-page>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import * as navigationConsts from '../../constants/navigation';

export default {
  name: 'intro-view',

  methods: {
    ...mapActions('navigation', [navigationConsts.ACTIONS.NAVIGATE]),

    _onProjectItemClick() {
      this[navigationConsts.ACTIONS.NAVIGATE](navigationConsts.VIEWS.HOME.name);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .intro-view {
    @include view;

    > .system-page-component {
      @include flexbox;
      @include flex-direction(column);
      @include align-items(center);
      @include justify-content(center);

      > .intro-icon {
        height: 40px;
        width: 40px;
      }

      > .project-picker {
        @include flex;
        @include align-self(stretch);

        background: $dark-weak-alpha;
        border: 1px solid $light-semiweak-alpha;
        border-radius: $border-radius;

        transform: translateZ(0);

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
  }
</style>
