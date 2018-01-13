<template>
  <section :class="`system-window ${isIntroWindowMode ? 'windowModeIntro' : ''}`">
    <!-- Title-bar -->
    <title-bar></title-bar>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import TitleBarComponent from './components/title-bar.component.vue';
import * as systemConsts from '../../constants/system';

export default {
  name: 'system-window',
  components: {
    titleBar: TitleBarComponent,
  },

  computed: {
    ...mapState('system', ['windowMode']),
    isIntroWindowMode() {
      return this.windowMode === systemConsts.WINDOW_MODES.INTRO;
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .system-window {
    height: 100%;
    width: 100%;
    background: $light-weak-alpha;
    border-radius: 5px;

    &.windowModeIntro {
      max-height: 400px;
      max-width: 500px;
    }
  }
</style>
