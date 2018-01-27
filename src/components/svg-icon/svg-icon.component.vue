<template>
  <div class="svg-icon">
    <svg>
      <use :xlink:href="`#${name}`"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  $default-size: 24px;

  .svg-icon {
    height: $default-size;
    width: $default-size;

    > svg {
      fill: currentColor;
      width: 100%;
      height: 100%;
    }
  }
</style>
