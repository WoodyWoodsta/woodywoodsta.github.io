<template>
  <section class="home-view-component">
    <system-page class="system-page-component">
      <img class="headshot" src="https://www.gravatar.com/avatar/4ba1f28ef88bdade0db82f950e22b941.jpg?s=150" alt="profile-gravatar">
      <h2>{{ pageData.title }}</h2>
      <vue-markdown :source="pageData.body"></vue-markdown>
      <vue-markdown :source="pageData.footnotes"></vue-markdown>
    </system-page>
  </section>
</template>

<script>
  import * as gistContent from '../../core/content/gist';
  import * as contentConsts from '../../constants/content';

  export default {
    name: 'home-view',

    mounted() {
      gistContent.provider.get(contentConsts.GIST_CONTENT_TYPES.PAGES)
        .then((data) => {
          this.pageData = data && data.home;
        });
    },

    data() {
      return {
        pageData: {},
      };
    },
  };
</script>

<style lang="scss">
  .home-view-component {
    @include view;

    > .system-page-component {
      @include flexbox;
      @include flex-direction(column);
      @include align-items(center);

      text-align: center;

      > .headshot {
        border-radius: 50%;

        @include mt(lg);
        @include mb(md);
      }
    }
  }
</style>
