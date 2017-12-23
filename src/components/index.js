import SystemPageComponent from './system-page/system-page.component.vue';

const components = [
  SystemPageComponent,
];

export default {
  install(Vue) {
    for (const component of components) {
      Vue.component(component.name, component);
    }
  },
};
