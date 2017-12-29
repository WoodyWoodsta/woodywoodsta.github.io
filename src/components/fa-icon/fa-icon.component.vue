<template>
  <div class="fa-icon-component">
    <font-awesome-icon class="font-awesome-icon-component" :icon="[set, icon]"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'fa-icon',
  props: {
    icon: String,
    set: {
      type: String,
      default: 'fas',
    },
  },
};
</script>

<style lang="scss">
  $default-size: 24px;

  .fa-icon-component {
    display: inline-block;
    position: relative;
    height: $default-size;
    width: $default-size;

    .font-awesome-icon-component {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
