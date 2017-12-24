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
      router.push(view.path);
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
        transition: $transition;

        > .nav-item {
          box-sizing: border-box;
          opacity: 1;
          height: 35px;

          cursor: pointer;

          transition: opacity $transition;

          &:not(.active) {
            opacity: 0.4;

            &:hover {
              opacity: 0.7;
            }
          }

          > span {
            @extend .p-xs;
            @extend .pl-sm;
            @extend .pr-sm;
            border-radius: 4px;
            background: none;
            position: relative;

            transition: background $transition;
          }

          > span::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 4px;

            border-left: 3px solid $transparent;
          }

          &.active {
            > span {
              background: $light-weak-alpha;
            }

            > span::after {
              border-left: 3px solid $light-medium-alpha;
              animation: 1s blink infinite;
            }
          }
        }
      }
    }

    .variable {
      > .keyword,
      > .operator {
        color: $amber-theme-primary-color;
      }
    }
  }

  body.light {
    .smart-nav-component {
      > .items-wrapper {
        > .items-container {
          > .nav-item {
            &.active {
              > span {
                background: $dark-weak-alpha;

                &::after {
                  border-left: 3px solid $dark-medium-alpha;
                }
              }
            }
          }
        }
      }
    }
  }

  @keyframes blink {
    0% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>
