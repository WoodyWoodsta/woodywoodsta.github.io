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
let SystemComponent;
export default SystemComponent = {
  name: 'app',
  methods: {
    _onNavigateButtonClick() {
      console.log('Clicked!');
    },
  },
};

export const SystemComponentAsync = new Promise((resolve) => {
  importModule('./bundles/vendor.js')
    .then(({ Vuex }) => {
      const { mapState, mapActions } = Vuex;

      resolve({
        ...SystemComponent,

        computed: {
          ...mapState('navigation', ['currentView']),
        },

        methods: {
          ...SystemComponent.methods,
          ...mapActions('navigation', ['navigate']),
        },
      });
    });
});
</script>

<style lang="stylus">
  // Global Stylesheet
  @require '../../assets/styles/index';

  .system-component {
    grid();

    background: $light-weak-alpha;

    .header {
      cell(1, 1, 'center', 0);
      grid();

      h1, button {
        cell(1, 2, 'center');
      }

      button {
        height: $size-large;
      }
    }

    .body {
      cell(1, 1,, 0);
      grid();
    }
  }
</style>
