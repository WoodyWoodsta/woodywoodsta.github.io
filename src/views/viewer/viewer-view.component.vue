<template>
  <section class="viewer-view" :class="{ sidePaneOpen }">
    <mobile-side-pane-toggle class="mobile-side-pane-toggle-component"
      :class="{ active: sidePaneOpen }"
      :active="sidePaneOpen"
      @click.native="_onMobileSidePaneToggleClick">
    </mobile-side-pane-toggle>

    <!-- Horizontal Client and Side Panes -->
    <div class="pane-area">
      <div class="side-pane-wrapper">
        <side-pane
          :views="views"
          :active-view="currentView"
          @menu-item-click="_onMenuItemClick">
        </side-pane>
      </div>
      <system-window-section class="viewer-pane">
        <router-view></router-view>
      </system-window-section>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import * as navigationConsts from '../../constants/navigation';
import * as systemConsts from '../../constants/system';

import SidePaneComponent from './components/side-pane.comonent.vue';
import MobileSidePaneToggleComponent from './components/mobile-side-pane-toggle.vue';

export default {
  name: 'viewer-view',

  data() {
    return {
      views: Object.values(navigationConsts.VIEWS.VIEWER.children),
    };
  },
  computed: {
    ...mapState('navigation', ['currentView']),
    ...mapState('system', ['sidePaneOpen']),
  },

  methods: {
    ...mapActions('navigation', [navigationConsts.ACTIONS.NAVIGATE]),
    ...mapMutations('system', [systemConsts.MUTATIONS.SET_SIDE_PANE_OPEN]),

    _onMenuItemClick({ view }) {
      this[navigationConsts.ACTIONS.NAVIGATE](view.name);
    },

    _onMobileSidePaneToggleClick() {
      this[systemConsts.MUTATIONS.SET_SIDE_PANE_OPEN](!this.sidePaneOpen);
    },
  },

  components: {
    sidePane: SidePaneComponent,
    mobileSidePaneToggle: MobileSidePaneToggleComponent,
  },
};
</script>

<style lang="scss">
  $translate-x-width: calc(#{-$side-pane-width} + #{get-size(md)});

  .viewer-view {
    @include view(contained);
    @include flexbox;
    @include flex-direction(column);

    > .mobile-side-pane-toggle-component {
      @include mt(md);
      @include mx(md);

      @include media-breakpoint-up(md) {
        display: none;
      }
    }

    > .pane-area {
      @include flexbox;
      @include flex-direction(row);
      @include flex;

      > .side-pane-wrapper {
        position: relative;
        min-width: $side-pane-width;

        transition: all $transition;
        transition-property: opacity;

        @include media-breakpoint-down(md) {
          min-width: $side-pane-width-md;
        }

        @include media-breakpoint-down(sm) {
          min-width: $side-pane-width;
          opacity: 0;
          pointer-events: none;
        }
      }

      > .viewer-pane {
        box-sizing: border-box;
        overflow-y: scroll;

        @include flex;
        @include m(md);
        @include ml(none);

        transition: all $transition;
        transition-property: transform;

        @include media-breakpoint-up(md) {
          margin-top: calc(#{-$window-title-bar-height * 2} + #{get-size(md)});
        }

        @include media-breakpoint-down(sm) {
          margin-left: $translate-x-width;
        }
      }
    }

    &.sidePaneOpen {
      > .pane-area {
        > .side-pane-wrapper {
          opacity: 1;
        }

        > .viewer-pane {
          transform: translateX(calc(-1 * #{$translate-x-width}));
        }

        > .mobile-side-pane-toggle-component {
          transform: translateX(calc((-1 * #{$translate-x-width}) + #{get-size(md)}))
        }
      }
    }
  }
</style>
