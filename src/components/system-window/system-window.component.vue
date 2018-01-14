<template>
  <section class="system-window" :class="{ windowModePicker: isPickerWindowMode }">
    <!-- Title-bar -->
    <title-bar :title="windowTitle" @traffic-light-click="_onTrafficLightClick"></title-bar>
    <div class="client">
      <slot></slot>
    </div>
    <footer-bar class="footer-bar-component">
      <slot slot="left" name="left-footer-bar"></slot>
      <slot slot="right" name="right-footer-bar"></slot>
    </footer-bar>
  </section>
</template>

<script>
import TitleBarComponent from './components/title-bar.component.vue';
import FooterBarComponent from './components/footer-bar.component.vue';
import * as systemConsts from '../../constants/system';

const _windowModes = Object.values(systemConsts.WINDOW_MODES);

export default {
  name: 'system-window',
  components: {
    titleBar: TitleBarComponent,
    footerBar: FooterBarComponent,
  },

  props: {
    windowMode: {
      type: String,
      validator: value => _windowModes.includes(value),
    },
    windowTitle: String,
  },

  computed: {
    isPickerWindowMode: () => this.windowMode === systemConsts.WINDOW_MODES.PICKER,
  },

  methods: {
    _onTrafficLightClick(event) {
      this.$emit('traffic-light-click', event);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .system-window {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: $window-background-color;
    border: 1px solid $window-border-color;
    border-radius: 5px;
    overflow: hidden;

    transform: translateZ(0);
    backface-visibility: hidden;

    @include flexbox;
    @include flex-direction(column);

    .client {
      @include flex;
    }

    > .footer-bar-component {
      margin-bottom: 0;
      opacity: 1;

      transition: all $transition;
      transition-property: margin-bottom, opacity;
    }

    &.windowModePicker {
      > .footer-bar-component {
        margin-bottom: -$footer-bar-height;
        opacity: 0;
      }
    }
  }
</style>
