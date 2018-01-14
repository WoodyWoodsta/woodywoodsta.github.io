<template>
  <section class="system-component row middle-xs center-xs no-gap">
    <system-window
      :windowMode="windowMode"
      :windowTitle="`Portfolio - ${CURRENT_TITLE}`">
    </system-window>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { VIEWS, GETTERS } from '../../constants/navigation';

export default {
  name: 'system',

  data() {
    return {
      views: Object.values(VIEWS),
      testingWindowMode: 'NORMAL',
    };
  },

  computed: {
    ...mapState('system', ['windowMode']),
    ...mapGetters('navigation', [GETTERS.CURRENT_TITLE]),
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

    .page-container {
      height: 100%;
      overflow-y: scroll;
    }

    .view-enter-active, .view-leave-active {
      transition-property: opacity, transform;
      transition: 150ms ease-out;
    }

    .view-enter, .view-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  }
</style>
