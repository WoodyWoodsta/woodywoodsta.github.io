<template>
  <section class="viewer-view" :class="{ sidePaneOpen }">
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
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { VIEWS, ACTIONS } from '../../constants/navigation';

import SidePaneComponent from './components/side-pane.comonent.vue';

export default {
  name: 'viewer-view',

  data() {
    return {
      views: Object.values(VIEWS.VIEWER.children),
    };
  },
  computed: {
    ...mapState('navigation', ['currentView']),
    ...mapState('system', ['sidePaneOpen']),
  },

  methods: {
    ...mapActions('navigation', [ACTIONS.NAVIGATE]),

    _onMenuItemClick({ view }) {
      this[ACTIONS.NAVIGATE](view.name);
    },
  },

  components: {
    sidePane: SidePaneComponent,
  },
};
</script>

<style lang="scss">
  $translate-x-width: calc(#{-$side-pane-width} + #{get-size(md)});

  .viewer-view {
    @include view(contained);
    @include flexbox;
    @include flex-direction(row);

    > .side-pane-wrapper {
      min-width: $side-pane-width;

      transition: all $transition;
      transition-property: opacity;

      @include media-breakpoint-down(md) {
        min-width: $side-pane-width-md;
      }

      @include media-breakpoint-down(sm) {
        min-width: $side-pane-width;
        opacity: 0;
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

    &.sidePaneOpen {
      > .side-pane-wrapper {
        opacity: 1;
      }

      > .viewer-pane {
        transform: translateX(calc(-1 * #{$translate-x-width}));
      }
    }
  }
</style>
