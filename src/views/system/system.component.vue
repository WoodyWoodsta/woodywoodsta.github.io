<template>
  <section class="system-component">
    <!-- TODO: Header bar -->
    <transition name="view" mode="out-in">
      <router-view></router-view>
    </transition>

    <button @click="_onNavigateButtonClick">Navigate</button>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { VIEWS } from '../../constants/navigation';

export default {
  name: 'system',

  computed: {
    ...mapState('navigation', ['currentView']),
  },

  methods: {
    _onNavigateButtonClick() {
      if (this.currentView.name === VIEWS.HOME.name) {
        this.navigate(VIEWS.TECH.name);
      } else {
        this.navigate(VIEWS.HOME.name);
      }
    },

    ...mapActions('navigation', ['navigate']),
  },
};
</script>

<style lang="scss">
  // Global Stylesheet
  @import '../../assets/styles/index';

  .view-enter-active, .view-leave-active {
    transition-property: opacity, transform;
    transition: 150ms ease-out;
  }

  .view-enter, .view-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
