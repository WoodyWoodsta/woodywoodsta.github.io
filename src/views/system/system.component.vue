<template>
  <section class="system-component row middle-xs center-xs no-gap">
    <!-- TODO: Header bar -->
    <div>
      <div class="row center-xs no-gap">
        <smart-nav :views="views"></smart-nav>
      </div>
    </div>

    <div class="col-xs-6">
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
</style>
