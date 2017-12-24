<template>
  <section class="smart-nav-controls-component">
    <div class="controls-wrapper row center-xs middle-xs no-gap">
      <div class="controls-container">
        <div>Testing 1</div>
        <div>Testing 2</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'smart-nav-controls',
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .smart-nav-controls-component {
    > .controls-wrapper {
      > .controls-wrapper {
        box-sizing: border-box;
        min-height: 30px;

        @extend .p-sm;
      }
    }
  }
</style>
