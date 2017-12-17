<template>
  <section class="app-component">
    <h1>Hello World</h1>
    <button @click="_onNavigateButtonClick">Navigate to a new place</button>
  </section>
</template>

<script>
let AppComponent;
export default AppComponent = {
  name: 'app',
  methods: {
    _onNavigateButtonClick() {
      console.log('Clicked!');
    },
  },
};

export const AppComponentAsync = new Promise((resolve) => {
  // importModule('./bundles/vendor.js')
  //   .then(({ Vuex }) => {
  //     const { mapState } = Vuex;

  //     resolve({
  //       ...AppComponent,
  //       ...mapState('navigation', ['currentView']),
  //     });
  //   });
  resolve({
    ...AppComponent,
  });
});
</script>

<style lang="stylus">
  // Global Stylesheet
  @require '../../assets/styles/index';

  .app-component {
    grid();

    padding: $padding-thick;
    background: $light-weak-alpha;

    h1 {
      cell(1, 3);
      center();
    }
  }
</style>
