<template>
  <section class="modals">
    <about-modal></about-modal>
  </section>
</template>

<script>
import AboutModalComponent from './components/about-modal.component.vue';

export default {
  name: 'modals',

  components: {
    aboutModal: AboutModalComponent,
  },
};
</script>

<style>
</style>
