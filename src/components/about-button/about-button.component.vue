<template>
  <fa-button class="about-button" icon="question"
    @click.native="_onAboutButtonClick()">
  </fa-button>
</template>

<script>
export default {
  name: 'about-button',

  methods: {
    _onAboutButtonClick() {
      this.$modal.show('about-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
  .about-button {
    // HACK: Unfortunately, CSS injection order (and therefore specificity) is in issue here. https://github.com/vuejs/vue-loader/issues/808
    height: $about-button-size !important;
    width: $about-button-size !important;
  }
</style>
