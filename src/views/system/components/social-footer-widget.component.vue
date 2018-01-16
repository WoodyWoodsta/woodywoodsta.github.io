<template>
  <section class="social-footer-widget">
    <a v-for="social of socials" :key="social.title" class="social-wrapper"
      :href="social.link" target="_blank" rel="noopener noreferrer">
      <fa-icon class="social-icon" :set="social.iconSet" :icon="social.icon"></fa-icon>
      <span class="social-title">{{ social.title }}</span>
    </a>
  </section>
</template>

<script>
export default {
  name: 'social-footer-widget',

  data() {
    return {
      socials: [
        {
          title: 'GitHub',
          icon: 'github',
          iconSet: 'fab',
          link: 'https://github.com/WoodyWoodsta',
        },
        {
          title: 'Instagram',
          icon: 'instagram',
          iconSet: 'fab',
          link: 'https://github.com/WoodyWoodsta',
        },
        {
          title: 'LinkedIn',
          icon: 'linkedin-in',
          iconSet: 'fab',
          link: 'https://github.com/WoodyWoodsta',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .social-footer-widget {
    height: 100%;

    @include mx(md);

    @include flexbox;
    @include flex-direction(row);
    @include flex-grow(0.2);
    @include align-items(center);
    @include justify-content(flex-end);

    > .social-wrapper {
      transition: none;

      @include px(xs);

      @include flexbox;
      @include flex-direction(row);
      @include align-items(center);

      &:last-child {
        @include pr(none);

        > .social-title {
          @include pr(none);
        }
      }

      &:hover {
        transform: scale(1.08);
      }

      > .social-icon {
        height: 18px;
        width: 18px;
      }

      > .social-title {
        display: none;

        @include pl(xs);
        @include pr(sm);
      }
    }

    &:hover {
      > .social-wrapper {
        > .social-title {
          display: initial;
        }
      }
    }
  }
</style>
