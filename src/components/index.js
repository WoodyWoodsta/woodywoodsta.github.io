import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';
import faFreeRegular from '@fortawesome/fontawesome-free-regular';
import faFreeBrands from '@fortawesome/fontawesome-free-brands';
import VModal from 'vue-js-modal';
import VueMarkdown from 'vue-markdown';

import AboutButtonComponent from './about-button/about-button.component.vue';
import SystemPageComponent from './system-page/system-page.component.vue';
import SystemWindowComponent from './system-window/system-window.component.vue';
import SystemWindowSectionComponent from './system-window-section/system-window-section.component.vue';
import SystemModalsComponent from './system-modals/system-modals.component.vue';
import FaButtonComponent from './fa-button/fa-button.component.vue';
import FaIconComponent from './fa-icon/fa-icon.component.vue';
import SvgIconComponent from './svg-icon/svg-icon.component.vue';

const components = [
  FaIconComponent,
  FaButtonComponent,
  SvgIconComponent,

  AboutButtonComponent,
  SystemPageComponent,
  SystemWindowComponent,
  SystemWindowSectionComponent,
  SystemModalsComponent,
];

export default {
  install(Vue) {
    fontawesome.library.add(faFreeSolid);
    fontawesome.library.add(faFreeRegular);
    fontawesome.library.add(faFreeBrands);

    // Install Third Party Components
    Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
    Vue.component('vue-markdown', VueMarkdown);
    Vue.use(VModal);

    // Install Custom Components
    for (const component of components) {
      Vue.component(component.name, component);
    }
  },
};
