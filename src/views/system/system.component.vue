<template>
  <section class="system-component row middle-xs center-xs no-gap">
    <!-- TODO: Header bar -->
    <div class="smart-nav-column col-lg-4 col-sm-5 col-xs-6">
      <div class="smart-nav-row row middle-xs center-xs no-gap">
        <smart-nav class="smart-nav" :views="views"></smart-nav>
      </div>

      <smart-nav-controls class="smart-nav-controls"></smart-nav-controls>
    </div>

    <div class="col-lg-8 col-sm-7 col-xs-6 page-container">
      <transition name="view" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import { VIEWS } from '../../constants/navigation';

export default {
  name: 'system',

  data() {
    return {
      views: Object.values(VIEWS),
    };
  },
};
</script>

<style lang="scss">
  // Global Stylesheet
  @import '../../assets/styles/index';

  .system-component {
    height: 100%;
    overflow: hidden;

    .smart-nav-column,
    .smart-nav-row {
      position: relative;
      height: 100%;
    }
    .smart-nav-column {
      background: $dark-weak-alpha;
      border-right: 1px solid $light-weak-alpha;

      @media screen and (max-width: get-breakpoint('md')) {
        > .smart-nav-row {
          > .smart-nav {
            font-size: 0.85rem;
          }
        }
      }

      .smart-nav-controls {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    .page-container {
      height: 100%;
      overflow-y: scroll;
    }
  }

  .view-enter-active, .view-leave-active {
    transition-property: opacity, transform;
    transition: 150ms ease-out;
  }

  .view-enter, .view-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
