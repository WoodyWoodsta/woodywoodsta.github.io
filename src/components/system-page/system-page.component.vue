<template>
  <section class="system-page">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'system-page',
};
</script>

<style lang="scss" scoped>
  .system-page {
    min-height: 100%;
    box-sizing: border-box;

    @include decomposite;
    @include p(lg);
  }
</style>

