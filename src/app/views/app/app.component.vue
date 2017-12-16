<template>
  <section>
    <div class="container">
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis dignissimos expedita alias. Eveniet voluptatem expedita optio tenetur ut. Facere nostrum ab similique voluptas id odit nisi distinctio sapiente iure.</p>
    </div>
    <div class="container">
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis dignissimos expedita alias. Eveniet voluptatem expedita optio tenetur ut. Facere nostrum ab similique voluptas id odit nisi distinctio sapiente iure.</p>
    </div>
  </section>
</template>

<script>
let AppComponent;
export default AppComponent = {
  name: 'app',
};

export const AppComponentAsync = new Promise((resolve) => {
  resolve({
    ...AppComponent,
  });
});
</script>

<style lang="stylus">
  // Global Stylesheet
  @require '../../assets/styles/index';

  section {
    grid()
    +below(rem-calc(breakpoints[md])) {
      grid('column');
    }

    .container {
      cell(1, 2);

      background: $light-weak-alpha;
      border-radius: 2px;
      padding: $padding-normal;
    }
  }
</style>
