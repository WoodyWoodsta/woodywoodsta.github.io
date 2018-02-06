<template>
  <div class="fa-button-component">
    <font-awesome-icon class="font-awesome-icon" :icon="[set, icon]"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'fa-button',
  props: {
    icon: String,
    set: {
      type: String,
      default: 'fas',
    },
  },
};
</script>

<style lang="scss" scoped>
  $default-size: 28px;

  .fa-button-component {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: $default-size;
    width: $default-size;
    cursor: pointer;
    overflow: visible;

    border: 2px solid currentColor;
    border-radius: 50%;

    transition-property: transform;
    transition: $transition;

    &:hover {
      transform: scale(1.13);
    }

    &:active {
      transform: scale(0.95);
    }

    .font-awesome-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 60%;
      width: 60%;

      transform: translate(-50%, -50%);
    }
  }
</style>
