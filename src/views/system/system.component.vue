<template>
  <section class="system-component">
    <system-window class="system-window-component" :class="{ windowModePicker: isPickerWindowMode }"
      :window-mode="windowMode"
      :window-title="`Portfolio - ${CURRENT_TITLE}`"
      @traffic-light-click="_onTrafficLightClick">

      <router-view></router-view>

      <div class="system-window-component__made-with-widget" slot="right-footer-bar">
        <fa-icon class="made-with-icon" icon="code"></fa-icon>
        <span>with</span>
        <fa-icon class="made-with-icon heart" icon="heart"></fa-icon>
        <span>using</span>
        <fa-icon class="made-with-icon vuejs" set="fab" icon="vuejs"></fa-icon>
      </div>
    </system-window>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import * as navigationConsts from '../../constants/navigation';
import { WINDOW_MODES } from '../../constants/system';

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

      .system-window-component__made-with-widget {
        @include flexbox;
        @include flex-direction(row);
        @include align-items(center);

        @include px(md);

        > .made-with-icon {
          height: 15px;
          width: 15px;

          transition: all $transition;
          transition-property: color;

          & + span {
            @include px(sm);
          }
        }

        &:hover {
          > .made-with-icon {
            &.heart {
              color: material-color('red', '400');
            }

            &.vuejs {
              color: material-color('teal', '400');
            }
          }
        }
      }
    }
  }
</style>
