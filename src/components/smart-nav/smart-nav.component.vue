<template>
  <section class="smart-nav-component row no-gap">
    <div class="variable">
      <span class="keyword">const</span>
      <span><strong>sean</strong></span>
      <span class="operator">=</span>
    </div>
    <div class="items-wrapper ml-md">
      <div class="items-container" :style="`transform: translateY(${ -itemsOffset }px)`">
        <div :class="`nav-item ${view.theme.class} ${_isActive(view) ? 'active' : ''}`"
          v-for="view of views"
          :key="view.name"
          @click="_onNavItemClick(view)">
            <span>{{ view.title }}</span>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { router } from '../../router';

export default {
  name: 'smart-nav',
  props: {
    views: Array,
  },
  computed: {
    ...mapState('navigation', ['currentView']),

    itemsOffset: function _computeItemOffset() {
      const height = 35;

      return this.views.indexOf(this.currentView) * height;
    },
  },

  methods: {


    _isActive(view) {
      return view.name === this.currentView.name;
    },

    _onNavItemClick(view) {
      router.push(view.name);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  .smart-nav-component {
    font-size: 1.5rem;

    > .items-wrapper {
      position: relative;

      > .items-container {
        transition-property: transform;
        transition: 300ms ease-in-out;

        > .nav-item {
          box-sizing: border-box;
          opacity: 1;
          height: 35px;

          cursor: pointer;

          transition: opacity 300ms ease-in-out;

          &:not(.active) {
            opacity: 0.6;
          }

          > span {
            @extend .p-xs;
            border-radius: 2px;
            background: none;

            transition: background 300ms ease-in-out;
          }

          &.active {
            > span {
              background: $light-weak-alpha;
            }
          }
        }
      }
    }

    .variable {
      > .keyword {
        color: $amber-theme-primary-color;
      }
    }
  }
</style>
