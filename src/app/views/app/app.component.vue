<template>
<h1>Hello World</h1>
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
</style>
