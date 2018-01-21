<template>
  <section class="viewer-view">
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
  .viewer-view {
    @include view(contained);
    @include flexbox;
    @include flex-direction(row);

    > .side-pane-wrapper {
      min-width: $side-pane-width;
    }

    > .viewer-pane {
      box-sizing: border-box;
      overflow-y: scroll;

      @include flex;
      @include m(md);
      @include ml(none);

      margin-top: calc(#{-$window-title-bar-height * 2} + #{get-size(md)});
    }
  }
</style>
