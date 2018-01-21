<template>
  <section class="side-pane">
    <div class="menu-item-header">
      <span>Files/Pages</span>
    </div>
    <div class="menu-item-list-wrapper">
      <menu-item v-for="view of views" :key="view.name"
        :view="view"
        :active="isViewActive(view)"
        @click.native="_onMenuItemClick(view)">
      </menu-item>
    </div>
  </section>
</template>

<script>
import MenuItemComponent from './menu-item.component.vue';

export default {
  name: 'side-pane',

  props: {
    views: {
      type: Array,
      default: [],
    },
    activeView: Object,
  },

  methods: {
    isViewActive(view) {
      return view === this.activeView;
    },

    _onMenuItemClick(view) {
      this.$emit('menu-item-click', { view });
    },
  },

  components: {
    menuItem: MenuItemComponent,
  },
};
</script>

<style lang="scss">
  .side-pane {
    > .menu-item-header {
      @include section-header-bar;
    }

    > .menu-item-list-wrapper {
      @include flexbox;
      @include flex-direction(column);
      @include justify-content(start);
    }
  }
</style>
