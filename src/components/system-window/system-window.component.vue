<template>
  <section :class="`system-window ${isIntroWindowMode ? 'windowModeIntro' : ''}`">
    <!-- Title-bar -->
    <title-bar :title="windowTitle"></title-bar>
  </section>
</template>

<script>
import TitleBarComponent from './components/title-bar.component.vue';
import * as systemConsts from '../../constants/system';

const _windowModes = Object.values(systemConsts.WINDOW_MODES);

export default {
  name: 'system-window',
  components: {
    titleBar: TitleBarComponent,
  },

  props: {
    windowMode: {
      type: String,
      validator: value => _windowModes.includes(value),
    },
    windowTitle: String,
  },

  computed: {
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
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    background: $light-weak-alpha;
    border-radius: 5px;

    transition-property: max-height, max-width;
    transition: ($transition-duration * 2) $transition-timing-function;

    &.windowModeIntro {
      max-height: 400px;
      max-width: 500px;
    }
  }
</style>
