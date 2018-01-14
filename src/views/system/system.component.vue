<template>
  <section class="system-component row middle-xs center-xs no-gap">
    <system-window class="system-window-component" :class="{ windowModeIntro: isIntroWindowMode }"
      :window-mode="windowMode"
      :window-title="`Portfolio - ${CURRENT_TITLE}`">

      <router-view></router-view>

      <div slot="left-footer-bar">This is some footer text</div>
    </system-window>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import * as navigationConsts from '../../constants/navigation';
import { WINDOW_MODES } from '../../constants/system';

export default {
  name: 'system',

  computed: {
    ...mapState('system', ['windowMode']),
    ...mapGetters('navigation', [navigationConsts.GETTERS.CURRENT_TITLE]),

    isIntroWindowMode() {
      return this.windowMode === WINDOW_MODES.INTRO;
    },
  },
};
</script>

<style lang="scss">
  // Global Stylesheet
  @import '../../assets/styles/index';

  .system-component {
    height: 100%;
    overflow: hidden;

    @extend .p-md;

    > .system-window-component {
      max-height: 100%;
      max-width: 100%;
      transition: ($transition-duration * 2) $transition-timing-function;
      transition-property: max-height, max-width;

      &.windowModeIntro {
        max-height: 400px;
        max-width: 500px;
      }
    }
  }
</style>
