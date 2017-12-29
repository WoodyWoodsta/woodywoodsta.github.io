import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import faFreeSolid from '@fortawesome/fontawesome-free-solid';
import faFreeRegular from '@fortawesome/fontawesome-free-regular';

import SystemPageComponent from './system-page/system-page.component.vue';
import SmartNavComponent from './smart-nav/smart-nav.component.vue';
import SmartNavControlsComponent from './smart-nav-controls/smart-nav-controls.component.vue';
import FaButton from './fa-button/fa-button.component.vue';
import FaIcon from './fa-icon/fa-icon.component.vue';

const components = [
  SystemPageComponent,
  SmartNavComponent,
  SmartNavControlsComponent,
  FaButton,
  FaIcon,
];

export default {
  install(Vue) {
    fontawesome.library.add(faFreeSolid);
    fontawesome.library.add(faFreeRegular);

    // Install Third Party Components
    Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

    // Install Custom Components
    for (const component of components) {
      Vue.component(component.name, component);
    }
  },
};
