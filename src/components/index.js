import SystemPageComponent from './system-page/system-page.component.vue';
import SmartNavComponent from './smart-nav/smart-nav.component.vue';

const components = [
  SystemPageComponent,
  SmartNavComponent,
];

export default {
  install(Vue) {
    for (const component of components) {
      Vue.component(component.name, component);
    }
  },
};
