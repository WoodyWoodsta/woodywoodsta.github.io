<template>
  <section class="system-window" :class="{ windowModePicker: isPickerWindowMode }">
    <!-- Title-bar -->
    <title-bar :title="windowTitle"
      @traffic-light-click="_onTrafficLightClick"
      :window-mode-picker="isPickerWindowMode">
    </title-bar>
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
    isPickerWindowMode() {
      return this.windowMode === systemConsts.WINDOW_MODES.PICKER;
    },
  },

  methods: {
    _onTrafficLightClick(event) {
      this.$emit('traffic-light-click', event);
    },
  },
};
</script>

<style lang="scss">
  .system-window {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid $transparent;
    border-radius: 5px;
    overflow: hidden;

    transform: translateZ(0);
    backface-visibility: hidden;

    @include theme(dark) {
      background: $dark-window-background-color;
      border-color: $dark-window-border-color;
    }

    @include theme(light) {
      background: $light-window-background-color;
      border-color: $light-window-border-color;
    }

    @include theme(red) {
      background: $red-window-background-color;
      border-color: $red-window-border-color;
    }

    @include theme(blue) {
      background: $blue-window-background-color;
      border-color: $blue-window-border-color;
    }

    > .client {
      height: calc(100% - #{$window-footer-bar-height} - #{$window-title-bar-height * 2});

      transition: all $transition;
      transition-property: height;

      will-change: height;
    }

    > .footer-bar-component {
      margin-bottom: 0;

      transition: all $transition;
      transition-property: margin-bottom, opacity;
    }

    &.windowModePicker {
      .client {
        height: calc(100% - #{$window-title-bar-height});
      }

      > .footer-bar-component {
        margin-bottom: -$window-footer-bar-height;
        opacity: 0;
      }
    }
  }
</style>
