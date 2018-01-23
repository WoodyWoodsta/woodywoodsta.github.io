<template>
  <section class="system-component">
    <system-window class="system-window-component" :class="{ windowModePicker: isPickerWindowMode }"
      :window-mode="windowMode"
      :window-title="`Portfolio - ${CURRENT_TITLE}`"
      @traffic-light-click="_onTrafficLightClick">

      <router-view></router-view>

      <social-footer-widget slot="right-footer-bar"></social-footer-widget>
    </system-window>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import * as navigationConsts from '../../constants/navigation';
import { WINDOW_MODES } from '../../constants/system';

import SocialFooterWidgetComponent from './components/social-footer-widget.component.vue';

export default {
  name: 'system',

  computed: {
    ...mapState('system', ['windowMode']),
    ...mapGetters('navigation', [navigationConsts.GETTERS.CURRENT_TITLE]),

    isPickerWindowMode() {
      return this.windowMode === WINDOW_MODES.PICKER;
    },
  },

  methods: {
    ...mapActions('navigation', [navigationConsts.ACTIONS.NAVIGATE]),

    _onTrafficLightClick(event) {
      if (event && event.type) {
        switch (event.type) {
          case 'close':
            this[navigationConsts.ACTIONS.NAVIGATE](navigationConsts.VIEWS.PICKER.name);
            break;

          default:
            break;
        }
      }
    },
  },

  components: {
    socialFooterWidget: SocialFooterWidgetComponent,
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .system-component {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    @include p(md);

    @include flexbox;
    @include flex-direction(row);
    @include align-items(center);
    @include justify-content(center);

    > .system-window-component {
      max-height: 100%;
      max-width: 100%;
      transition: ($transition-duration * 2) $transition-timing-function, ($transition-duration * 2) $transition-timing-function, $transition, $transition;
      transition-property: max-height, max-width, background, border-color;

      @include decomposite;
      will-change: max-width, max-height, background, border-color;

      &.windowModePicker {
        max-height: 400px;
        max-width: 500px;
      }
    }
  }
</style>
