<template>
  <section class="system-component">
    <div class="header">
      <h1>Hello World</h1>
      <button @click="_onNavigateButtonClick">Navigate to a new place</button>
    </div>

    <div class="body">
      {{ currentView }}
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'system',

  computed: {
    ...mapState('navigation', ['currentView']),
  },

  methods: {
    _onNavigateButtonClick() {
      console.log('Clicked!');
    },

    ...mapActions('navigation', ['navigate']),
  },
};
</script>

<style lang="scss">
  // Global Stylesheet
  @import '../../assets/styles/index';

  .system-component {
    background: $light-weak-alpha;

    .header {
      h1, button {
      }

      button {
        height: $size-large;
      }
    }

    .body {
    }
  }
</style>
