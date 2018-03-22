<template>
  <section class="tech-skills-block" ref="techSkillsBlock"
    @mouseover="_onMouseEnter()"
    @mouseout="_onMouseLeave()">
    <tech-skill class="tech-skill-component" v-for="skill of skills"
      :skill="skill"
      :key="skill.title"
      :hovering-on-block="hoveringOnBlock"
      :active="skill._active"
      :parent-dims-fn="getDimensions"
      @click.native="_onTechSkillClick(skill)">
    </tech-skill>
  </section>
</template>

<script>
import TechSkillComponent from './tech-skill.component.vue';

export default {
  name: 'tech-skills-block',

  props: {
    skills: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      skillsBlockHovering: false,
      currentTechSkill: null,
    };
  },

  computed: {
    techSkillActive() {
      return !!this.currentTechSkill;
    },

    hoveringOnBlock() {
      return this.skillsBlockHovering || this.techSkillActive;
    },
  },

  methods: {
    getDimensions() {
      if (this.$refs && this.$refs.techSkillsBlock) {
        return this.$refs.techSkillsBlock.getBoundingClientRect();
      }
    },

    _onMouseEnter() {
      this.skillsBlockHovering = true;
    },

    _onMouseLeave() {
      this.skillsBlockHovering = false;
    },

    _onTechSkillClick(skill) {
      if (this.currentTechSkill === skill) {
        this.currentTechSkill = undefined;
        this.$set(skill, '_active', false);
      } else {
        if (this.currentTechSkill) {
          this.$set(this.currentTechSkill, '_active', false);
        }
        this.$set(skill, '_active', true);
        this.currentTechSkill = skill;
      }
    },
  },

  components: {
    techSkill: TechSkillComponent,
  },
};
</script>

<style lang="scss" scoped>
  .tech-skills-block {
    @include flexbox;
    @include flex-wrap(wrap);
    @include justify-content(center);

    > .tech-skill-component {
      @include mx(xs);
      @include mt(sm);
    }
  }
</style>
