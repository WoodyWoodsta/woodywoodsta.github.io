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
            <span class="bracket">[</span><span class="title">{{ view.title }}</span><span class="bracket">]</span>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
    ...mapActions('navigation', ['navigate']),
    _isActive(view) {
      return view.name === this.currentView.name;
    },

    _onNavItemClick(view) {
      this.navigate(view.name);
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/index';

  $cursor-thickness: 2px;

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

          > .title {
            @extend .p-xs;
            border-radius: $border-radius;
            background: none;
            position: relative;

            transition: background $transition;
          }

          > .title:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: get-size('xs', 0.5);

            border-left: $cursor-thickness solid $transparent;
          }

          > .bracket {
            opacity: 0;

            &:first-child {
              @extend .mr-xs;
            }

            &:last-child {
              @extend .ml-xs;
            }
          }

          &.active {
            > .title {
              background: $light-weak-alpha;
            }

            > .title::after {
              border-left: $cursor-thickness solid $light-medium-alpha;
              animation: 1s blink infinite;
            }

            > .bracket {
              opacity: 1;
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
      .keyword,
      .operator {
        color: $indigo-theme-primary-color;
      }

      > .items-wrapper {
        > .items-container {
          > .nav-item {
            &.active {
              > .title {
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
