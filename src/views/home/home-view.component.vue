<template>
  <section class="home-view-component">
    <system-page class="system-page-component">
      <img class="headshot" src="https://www.gravatar.com/avatar/4ba1f28ef88bdade0db82f950e22b941.jpg?s=150" alt="profile-gravatar">
      <h2>{{ pageData.title }}</h2>
      <vue-markdown :source="pageData.body"></vue-markdown>

      <h3>Tech Skills</h3>
      <tech-skills-block :skills="pageData.techSkills"></tech-skills-block>

      <vue-markdown class="footnotes" :source="pageData.footnotes"></vue-markdown>
    </system-page>
  </section>
</template>

<script>
  import { home } from '../../content/pages';

  import TechSkillsBlockComponent from './components/tech-skills-block.component.vue';

  export default {
    name: 'home-view',

    data() {
      return {
        pageData: home,
      };
    },

    components: {
      techSkillsBlock: TechSkillsBlockComponent,
    },
  };
</script>

<style lang="scss">
  .home-view-component {
    @include view;
    overflow-x: hidden;

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

      > .footnotes {
        @include mt(xl);
      }
    }
  }
</style>
