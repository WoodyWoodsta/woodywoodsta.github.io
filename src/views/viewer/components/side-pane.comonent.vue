<template>
  <section class="side-pane">
    <!-- Core Menu Items -->
    <div class="menu-item-header">
      <span>Files/Pages</span>
    </div>
    <div class="menu-item-list-wrapper">
      <menu-item v-for="view of views" :key="view.name"
        :item="view"
        :active="isViewActive(view)"
        @click.native="_onMenuItemClick(view)">
      </menu-item>
    </div>

    <div class="spacer"></div>

    <!-- Social Menut Items -->
    <div class="menu-item-header social-items">
      <span>Socials/Links</span>
    </div>
    <div class="social-items-list-wrapper social-items">
      <menu-item v-for="socialLink of socialLinks" :key="socialLink.title"
        :item="socialLink"
        @click.native="_onSocialLinkClick(socialLink)">
      </menu-item>
    </div>
  </section>
</template>

<script>
import { socialLinks } from '../../../content/viewer-side-pane';

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

  data() {
    return {
      socialLinks,
    };
  },

  methods: {
    isViewActive(view) {
      return view === this.activeView;
    },

    _onMenuItemClick(view) {
      this.$emit('menu-item-click', { view });
    },

    _onSocialLinkClick(socialLink) {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href: socialLink.link,
        rel: 'noopener noreferrer',
      }).click();
    },
  },

  components: {
    menuItem: MenuItemComponent,
  },
};
</script>

<style lang="scss">
  .side-pane {
    height: 100%;

    @include flexbox;
    @include flex-direction(column);

    > .menu-item-header {
      @include section-header-bar;

      @include flex-shrink(0);

      &:not(:first-child) {
        border-top-width: 1px;
        border-top-style: solid;

        @include mt(lg);
      }
    }

    > .menu-item-list-wrapper {
      @include flexbox;
      @include flex-direction(column);
      @include justify-content(start);
    }

    > .social-items-list-wrapper {
      @include mb(lg);
    }

    > .social-items {
      z-index: 1;

      @include theme(dark) {
        background: $dark-window-background-color;
      }
      @include theme(light) {
        background: $light-window-background-color;
      }
      @include theme(red) {
        background: $red-window-background-color;
      }
      @include theme(blue) {
        background: $blue-window-background-color;
      }
    }

    .spacer {
      @include flex;
    }
  }
</style>
